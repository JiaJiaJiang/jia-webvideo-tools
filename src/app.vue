<template>
	<div v-if="showing && gifRangeSelector" id="range_selector" :style="gifRangeSelectorStyle()">
	</div>
	<div id="jia-video-tool" v-if="showing == 'toolbar'" :style="{ left: x + 'px', top: y + 'px' }"
		 @drag="">
		<div>
			<div title="截图" @click="screenshot" opt>📷</div>
			<div title="截取GIF" :actived="tool == 'gif'"
				 @click="tool = (tool === 'gif' ? '' : 'gif')" opt>
				✂</div>
			<div id="time_tool">
				<div title="时间微调←" @click="timeOffset(-1)" opt>◀️</div>
				<div title="时间微调→" @click="timeOffset(1)" opt>▶️</div>
				<input title="当前视频时间（秒）" :value="time" type="text"
					   @change="setTime($event.target.value)" @wheel="wheelTime($event)"
					   :style="fitInputValue(time)" />
			</div>
			<div @click="hide" opt>❌</div>
		</div>
		<div v-if="tool == 'gif'" id="row1">
			<div title="设置开始时间" opt @click="gifTime[0] = getTime()">⏺️</div>
			<div title="设置结束时间" opt @click="gifTime[1] = getTime()">⏹️</div>
			<div><input v-model="gifTime[0]" placeholder="start" :style="fitInputValue(gifTime[0])"
					   @dblclick="setTime(tText(gifTime[0]))">
			</div>
			<div><input v-model="gifTime[1]" placeholder="end" :style="fitInputValue(gifTime[1])"
					   @dblclick="setTime(tText(gifTime[1]))">
			</div>
			<div title="GIF循环" opt :actived="gifLoop" @click="gifLoop = !gifLoop">🔁</div>
			<div title="GIF缩放">🔍<input type="number" max="1" min="0.1" step="0.1"
					   v-model="gifScale" style="width: 2.5em;"></div>
			<div title="框选区域" opt :actived="gifRangeSelector"
				 @click="gifRangeSelector = !gifRangeSelector">🔲</div>
			<div v-show="!gifEncoding && !gifRecording" title="开始录制" opt @click="startRecordGIF">✅
			</div>
			<div v-show="gifRecording" title="正在录制" class="fadeLoop">🎦</div>
			<div v-show="gifEncoding" title="正在编码" class="fadeLoop">🕒</div>
		</div>
		<div id="row2" v-show="tool == 'gif' && gifRangeSelector" style="display: flex;">
			范围:
			<input title="x(滚轮调整)" placeholder="x" v-model="gifRangeOpt.x" type="number" min="0"
				   step="1" :max="video.videoWidth - gifRangeOpt.width"
				   @wheel="wheelNumber($event, 'x')">
			<input title="y(滚轮调整)" placeholder="y" v-model="gifRangeOpt.y" type="number" min="0"
				   step="1" :max="video.videoHeight - gifRangeOpt.height"
				   @wheel="wheelNumber($event, 'y')">
			<input title="width(滚轮调整)" placeholder="width" v-model="gifRangeOpt.width" type="number"
				   :max="video.videoWidth - gifRangeOpt.x + 1" @wheel="wheelNumber($event, 'width')"
				   :disabled="gifRecording" min="0" step="1">
			<input title="height(滚轮调整)" placeholder="height" v-model="gifRangeOpt.height"
				   type="number" :max="video.videoHeight - gifRangeOpt.y + 1"
				   :disabled="gifRecording" @wheel="wheelNumber($event, 'height')" min="0" step="1">
		</div>
	</div>
	<dialog v-show="showing == 'result'" ref="dialog" @click.left="hide">
		<canvas v-show="result === 'canvas'" ref="canvas"></canvas>
		<img v-show="result === 'img'" ref="img"></img>
	</dialog>
</template>
<style lang="scss" scoped>
#jia-video-tool {
	position: fixed;
	border: 1px solid #ccc;
	background-color: #999999;
	border-radius: .3em;
	[opt] {
		&:hover, &[actived="true"] {
			background-color: #333;
		}
		user-select: none;
		cursor: pointer;
		padding: 0 .1em;
		vertical-align: middle;
	}
	&>div {
		padding: 0.2em;
		display: flex;
		div {
			word-wrap: nowrap;
			word-break: keep-all;
			display: inline-block;
		}
	}
	#row2 {
		&>input {
			width: 4em;
		}
	}
	input {
		min-width: 3em;
	}
}
#range_selector {
	border: 2px dashed #6d8500;
	box-shadow: 0 0 0 100vmax #000000aa;
	position: fixed;
	pointer-events: none;
}
dialog {
	position: fixed;
	display: flex;
	padding: 0;
	top: 0;
	left: 0;
	justify-content: center;
	border: 0;
	max-width: 100vw;
	max-height: 100vh;
	align-items: center;
	width: 100%;
	height: 100%;
	background: #000000b4;
	canvas, img {
		max-width: 90%;
		max-height: 90%;
		border: 2px solid #000;
	}
}
.fadeLoop {
	animation: fadeLoop 1s infinite;
}
@keyframes fadeLoop {
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>
<script>
const { Frame, GIF } = ImageScript;
export default {
	props: [],
	data() {
		return {
			createdBlobURLs: new Set(),
			video: null,
			showing: false,
			tool: '',
			result: null,
			time: 0,
			gifTime: [0, 0],
			gifLoop: true,
			gifScale: 1,
			gifRecording: false,
			gifEncoding: false,
			gifRangeSelector: false,
			gifRangeOpt: { x: 0, y: 0, width: 500, height: 500 },
			x: 0,
			y: 0,
		};
	},
	watch: {
		tool(value) {
			const v = this.video;
			if (value === 'gif') {
				if (!v._rawStyle) {
					v._rawStyle = v.style['object-fit'] || '';
				}
				v.style['object-fit'] = 'fill';
			} else {
				v.style['object-fit'] = v._rawStyle;
			}
		}
	},
	methods: {
		setTime(t) {
			this.video.currentTime = t;
			this.time = this.video.currentTime;
		},
		getTime() {
			return this.video.currentTime;
		},
		tText(t) {
			return t.toFixed(6) * 1;
		},
		videoBound() {
			return this.video.getBoundingClientRect();
		},
		gifRangeSelectorStyle() {
			const v = this.video;
			const bound = this.videoBound();
			const p = bound.width / v.videoWidth;
			return {
				width: p * this.gifRangeOpt.width + 'px',
				height: p * this.gifRangeOpt.height + 'px',
				left: bound.left + this.gifRangeOpt.x * p + 'px',
				top: bound.top + this.gifRangeOpt.y * p + 'px'
			};
		},
		show(x, y, video, tool = this.tool) {
			this.video = video;
			if (!video) { this.hide(); return; }
			if (tool == 'screenshot') {
				this.showing = false;
				this.screenshot();
				return;
			} else {
				this.showing = 'toolbar';
			}
			this.tool = tool;
			this.time = this.getTime();
			this.x = x;
			this.y = y;
		},
		hide() {
			this.showing = false;
			for (let u of this.createdBlobURLs) {
				URL.revokeObjectURL(u);
			}
			this.stopRecordGIF();
		},
		timeOffset(offset) {
			if (!this.video) return;
			if (!this.video.paused) this.video.pause();
			this.setTime(this.video.currentTime + offset * (1 / 23));
		},
		screenshot() {
			if (!this.video) return;
			this.canvasFitVideo();
			this.$refs.canvas.ctx.drawImage(this.video, 0, 0);
			this.result = 'canvas';
			this.showing = 'result';
		},
		wheelNumber(ev, valueName) {
			ev.preventDefault();
			ev.stopPropagation();
			const target = ev.target;
			if (target.disabled) return;
			let v = Number(target.value), max = Number(target.max);
			if (!Number.isSafeInteger(v)) v = 0;
			v += ev.wheelDeltaY * (ev.shiftKey ? 10 : 1)
			if (v < 0) v = 0;
			if (v > max) v = max;
			this.gifRangeOpt[valueName] = v;
		},
		wheelTime(ev) {
			ev.preventDefault();
			ev.stopPropagation();
			ev.wheelDeltaY > 0 ? this.timeOffset(1) : this.timeOffset(-1)
		},
		async startRecordGIF() {
			if (!this.video) return;
			const v = this.video, canvas = this.$refs.canvas;
			canvas.style['aspect-ratio'] = canvas.width / canvas.height;
			v.pause();
			try {
				this.gifRecording = true;
				this.canvasFitVideo(this.gifScale ?? 1, this.gifRangeSelector);
				const tmpImageData = canvas.ctx.createImageData(canvas.width, canvas.height);
				const frames = [];
				let lastFullImageData;
				v.currentTime = this.gifTime[0];
				const frameTime = 1000 / 24;
				let lastFrameTime = 0;
				const THIS = this;
				await new Promise(async (ok, ojbk) => {
					function getFrame() {
						//把视频绘制到canvas
						if (THIS.gifRangeSelector) {
							const opt = THIS.gifRangeOpt;
							canvas.ctx.drawImage(v, opt.x, opt.y, opt.width, opt.height, 0, 0, canvas.width, canvas.height);
						} else {
							canvas.ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
						}
						//读取canvas像素RGBA信息
						const imageData = canvas.ctx.getImageData(0, 0, canvas.width, canvas.height);
						const thisFrameTime = Date.now(), lastDuration = thisFrameTime - lastFrameTime;
						if (frames.length) {//修正前一帧的时长
							frames[frames.length - 1].duration = lastDuration;
						}
						//获取此帧和上一帧的差异
						const diff = THIS.frameDiff(imageData, lastFullImageData, tmpImageData);
						if (diff === 0) {
							//未变化，不用更新lastFrameTime
							//不修改lastFullImageData，以免积累的微小变化无法显示
						} else {
							const f = new Frame(diff.diffImageData.width, diff.diffImageData.height, frameTime, diff.x, diff.y);
							f.bitmap = diff.diffImageData.data;
							frames.push(f);
							lastFullImageData = imageData;
							lastFrameTime = thisFrameTime;
						}
					}
					getFrame();
					await v.play();
					const timer = setInterval(async () => {
						if (v.currentTime > this.gifTime[1] || !this.gifRecording) {
							clearInterval(timer);
							v.pause();
							if (this.gifRecording) { ok(); }
							else { ojbk('abort'); }
							return;
						}
						getFrame();
					}, frameTime);
				});
				const gif = new GIF(frames, this.gifLoop ? -1 : 0);
				this.gifRecording = false;
				this.gifEncoding = true;
				this.$forceUpdate();
				const buf = await gif.encode(90);
				const url = URL.createObjectURL(new Blob([buf], { type: "image/gif" }));
				this.createdBlobURLs.add(url);
				this.result = 'img';
				this.showing = 'result';
				this.$refs.img.src = url;
			} catch (err) {
				console.error(err);
				if (err !== 'abort')
					alert(`Failed to record gif: ${err.message}`);
			} finally {
				this.stopRecordGIF();
			}
		},
		stopRecordGIF() {
			this.gifEncoding = false;
			this.gifRecording = false;
			this.gifRangeSelector = false;
		},
		frameDiff(newImageData, preImageData, tmpImageData) {
			/* 返回0表示无变化，否则返回对象{x,y,diffImageData} */
			if (!preImageData) return { x: 0, y: 0, diffImageData: newImageData };
			const maxDiffValue = 5, canvas = this.$refs.canvas;
			let leftTop = [canvas.width, canvas.height], rightBottom = [0, 0];
			const newData = newImageData.data, preData = preImageData.data, tmpData = tmpImageData.data;
			//只更新这一帧相对上一帧完整画面的不同之处，并进行裁剪
			for (let x = 0; x < canvas.width; x++) {
				for (let y = 0; y < canvas.height; y++) {
					//忽略位于leftTop和rightBottom中间的点
					const i = (y * canvas.width + x) * 4;
					const diff = Math.max(
						Math.abs(newData[i] - preData[i]),
						Math.abs(newData[i + 1] - preData[i + 1]),
						Math.abs(newData[i + 2] - preData[i + 2]),
						Math.abs(newData[i + 3] - preData[i + 3]),
					);
					if (diff > maxDiffValue) {
						if (x < leftTop[0]) leftTop[0] = x;
						else if (x > rightBottom[0]) rightBottom[0] = x;
						if (y < leftTop[1]) leftTop[1] = y;
						else if (y > rightBottom[1]) rightBottom[1] = y;
						tmpData[i] = newData[i];;
						tmpData[i + 1] = newData[i + 1];
						tmpData[i + 2] = newData[i + 2];
						tmpData[i + 3] = newData[i + 3];
					} else {
						tmpData.fill(0, i, i + 4);
					}
				}
			}
			const newWidth = rightBottom[0] - leftTop[0] + 1, newHeight = rightBottom[1] - leftTop[1] + 1;
			if (newWidth <= 0 || newHeight <= 0) return 0;
			const genImageData = canvas.ctx.createImageData(newWidth, newHeight);
			if (newWidth === canvas.width && newHeight === canvas.height) {
				genImageData.data.set(tmpData);
			} else {
				for (let row = 0; row < newHeight; row++) {
					const startI = (leftTop[1] + row) * canvas.width * 4 + leftTop[0] * 4;
					genImageData.data.set(tmpData.subarray(startI, startI + newWidth * 4), row * newWidth * 4);
				}
			}
			return {
				x: leftTop[0], y: leftTop[1], diffImageData: genImageData
			};
		},
		canvasFitVideo(scale = 1, useRange = false) {
			const v = this.video, canvas = this.$refs.canvas;
			if (useRange) {
				canvas.width = Math.floor(this.gifRangeOpt.width * scale);
				canvas.height = Math.floor(this.gifRangeOpt.height * scale);
			} else {
				canvas.width = Math.floor(v.videoWidth * scale);
				canvas.height = Math.floor(v.videoHeight * scale);
			}
			canvas.style['aspect-ratio'] = canvas.width / canvas.height;
		},
		fitInputValue(value) {
			return { width: String(value).length / 1.8 + 'em' }
		},
	},
	mounted() {
		this.$refs.canvas.ctx = this.$refs.canvas.getContext('2d', { willReadFrequently: true });
		this.$refs.canvas.ctx.imageSmoothingQuality = "high";
		this.wheelEvent = (ev) => {
			this.$forceUpdate();
		};
		window.addEventListener('wheel', this.wheelEvent);
	},
	unmounted() {
		window.removeEventListener('wheel', this.wheelEvent);
	}
}
</script>