<template>
	<div v-if="showing && rangeSelector" id="range_selector" :style="rangeSelectorStyle()">
	</div>
	<div id="jia-video-tool" v-if="showing == 'toolbar'" :style="{ left: x + 'px', top: y + 'px' }"
		 @drag="">
		<div>
			<div title="截图" @click="screenshot" opt>📷</div>
			<div title="截取GIF" :actived="tool == 'gif'"
				 @click="tool = (tool === 'gif' ? '' : 'gif')" opt>
				✂</div>
			<div title="框选区域" opt :actived="rangeSelector" @click="rangeSelector = !rangeSelector">
				🔲</div>
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
			<div><input v-model.number="gifTime[0]" placeholder="start"
					   :style="fitInputValue(gifTime[0])" @dblclick="setTime(tText(gifTime[0]))">
			</div>
			<div><input v-model.number="gifTime[1]" placeholder="end"
					   :style="fitInputValue(gifTime[1])" @dblclick="setTime(tText(gifTime[1]))">
			</div>
			<div title="GIF循环" opt :actived="gifLoop" @click="gifLoop = !gifLoop">🔁</div>
			<div title="GIF缩放">🔍<input type="number" max="1" min="0.1" step="0.1"
					   v-model.number="gifScale" style="width: 2.5em;"></div>

			<div v-show="!gifEncoding && !gifRecording" title="开始录制" opt @click="startRecordGIF">✅
			</div>
			<div v-show="gifRecording" title="正在录制" class="fadeLoop">🎦</div>
			<div v-show="gifEncoding" title="正在编码" class="fadeLoop">🕒</div>
		</div>
		<div id="row2" v-show="rangeSelector" style="display: flex;">
			范围:
			<input title="x(滚轮调整)" placeholder="x" v-model.number="rangeOpt.x" type="number" min="0"
				   step="1" :max="video.videoWidth - rangeOpt.width"
				   @wheel="wheelNumber($event, 'x')">
			<input title="y(滚轮调整)" placeholder="y" v-model.number="rangeOpt.y" type="number" min="0"
				   step="1" :max="video.videoHeight - rangeOpt.height"
				   @wheel="wheelNumber($event, 'y')">
			<input title="width(滚轮调整)" placeholder="width" v-model.number="rangeOpt.width"
				   type="number" :max="video.videoWidth - rangeOpt.x + 1"
				   @wheel="wheelNumber($event, 'width')" :disabled="gifRecording" min="0" step="1">
			<input title="height(滚轮调整)" placeholder="height" v-model.number="rangeOpt.height"
				   type="number" :max="video.videoHeight - rangeOpt.y + 1" :disabled="gifRecording"
				   @wheel="wheelNumber($event, 'height')" min="0" step="1">
		</div>
	</div>
	<dialog v-show="showing == 'result'" ref="dialog" @click.left="hide">
		<canvas v-show="result === 'canvas'" ref="canvas"></canvas>
		<img v-show="result === 'img'" ref="img"></img>
	</dialog>
</template>
<style>
.jia-webvideo-tools-abs6r98e54aw3e {
	object-fit: fill !important;
}
</style>
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
import { encodeGIF } from './gif';
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
			rangeSelector: false,
			rangeOpt: { x: 0, y: 0, width: 500, height: 500 },
			x: 0,
			y: 0,
			saveableSettings: ['gifTime', 'gifLoop', 'gifScale', 'rangeSelector', 'rangeOpt'],
		};
	},
	watch: {
		rangeSelector(value) {
			const v = this.video;
			if (value) {
				v.classList.add('jia-webvideo-tools-abs6r98e54aw3e');
			} else {
				v.classList.remove('jia-webvideo-tools-abs6r98e54aw3e');
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
		rangeSelectorStyle() {
			const v = this.video;
			const bound = this.videoBound();
			const scaleX = bound.width / v.videoWidth,
				scaleY = bound.height / v.videoHeight;
			return {
				width: scaleX * this.rangeOpt.width + 'px',
				height: scaleY * this.rangeOpt.height + 'px',
				left: bound.left + this.rangeOpt.x * scaleX + 'px',
				top: bound.top + this.rangeOpt.y * scaleY + 'px'
			};
		},
		show(x, y, video, tool = this.tool) {
			this.video = video;
			if (!video) { this.hide(); return; }
			if (tool == 'screenshot') {
				this.showing = false;
				this.screenshot(false);
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
			this.rangeSelector=false;
			this.stopRecordGIF();
		},
		timeOffset(offset) {
			if (!this.video) return;
			if (!this.video.paused) this.video.pause();
			this.setTime(this.video.currentTime + offset * (1 / 23));
		},
		updateCanvas(useRange) {
			//把视频绘制到canvas
			const v = this.video, canvas = this.$refs.canvas;
			if (useRange) {
				const opt = this.rangeOpt;
				canvas.ctx.drawImage(v, opt.x, opt.y, opt.width, opt.height, 0, 0, canvas.width, canvas.height);
			} else {
				canvas.ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
			}
		},
		screenshot(useRange = this.rangeSelector) {
			if (!this.video) return;
			this.canvasFitVideo(1, useRange);
			this.updateCanvas(useRange);
			this.result = 'canvas';
			this.showing = 'result';
			this.saveSetting();
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
			this.rangeOpt[valueName] = v;
		},
		wheelTime(ev) {
			ev.preventDefault();
			ev.stopPropagation();
			ev.wheelDeltaY > 0 ? this.timeOffset(1) : this.timeOffset(-1)
		},
		async startRecordGIF() {
			if (!this.video) return;
			const v = this.video, canvas = this.$refs.canvas, useRange = this.rangeSelector;
			canvas.style['aspect-ratio'] = canvas.width / canvas.height;
			this.saveSetting();
			v.pause();
			try {
				this.gifRecording = true;
				this.canvasFitVideo(this.gifScale ?? 1, useRange);
				const frames = [], frameTime = 1000 / 24;
				v.currentTime = this.gifTime[0];
				let lastFrameTime = 0;
				const THIS = this;
				await new Promise(async (ok, ojbk) => {
					function getFrame() {
						if (v.currentTime > THIS.gifTime[1] || !THIS.gifRecording) {
							v.pause();
							if (THIS.gifRecording) { ok(); }
							else { ojbk('abort'); }
							return;
						}
						THIS.updateCanvas(useRange);
						const thisFrameTime = performance.now(), lastDuration = thisFrameTime - lastFrameTime;
						if (frames.length) {//修正前一帧的时长
							frames[frames.length - 1].duration = lastDuration;
							if (lastDuration < frameTime - 4) {
								requestAnimationFrame(getFrame);
								return;
							}
						}
						//读取canvas像素RGBA信息
						const imageData = canvas.ctx.getImageData(0, 0, canvas.width, canvas.height);
						frames.push({ imageData, duration: frameTime });
						lastFrameTime = thisFrameTime;
						requestAnimationFrame(getFrame);
					}
					await delay(100);
					await v.play();
					getFrame();
				});
				this.gifRecording = false;
				this.gifEncoding = true;
				this.$forceUpdate();
				const url = await encodeGIF(frames, {
					loop: this.gifLoop ? -1 : 0,
				});
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
		},
		canvasFitVideo(scale = 1, useRange = false) {
			const v = this.video, canvas = this.$refs.canvas;
			if (useRange) {
				canvas.width = Math.floor(this.rangeOpt.width * scale);
				canvas.height = Math.floor(this.rangeOpt.height * scale);
			} else {
				canvas.width = Math.floor(v.videoWidth * scale);
				canvas.height = Math.floor(v.videoHeight * scale);
			}
			canvas.style['aspect-ratio'] = canvas.width / canvas.height;
		},
		fitInputValue(value) {
			return { width: String(value).length / 1.8 + 'em' }
		},
		saveSetting() {
			const obj = {
				lastLocation: location.href
			};
			for (let n of this.saveableSettings) {
				if (n in this === false) throw (`setting "${n} not defined"`);
				obj[n] = this[n];
			}
			localStorage.setItem('jia-webvideo-tools', JSON.stringify(obj));
		},
		loadSetting() {
			let savedSettings = JSON.parse(localStorage.getItem('jia-webvideo-tools') || '{}');
			if (savedSettings.lastLocation !== location.href) savedSettings = {};
			for (let n of this.saveableSettings) {
				if (n in savedSettings) {
					this[n] = savedSettings[n];
				}
			}
		},
	},
	mounted() {
		this.$refs.canvas.ctx = this.$refs.canvas.getContext('2d', { willReadFrequently: true });
		this.$refs.canvas.ctx.imageSmoothingQuality = "high";
		this.wheelEvent = (ev) => {
			this.$forceUpdate();
		};
		window.addEventListener('wheel', this.wheelEvent);
		this.loadSetting();
	},
	unmounted() {
		window.removeEventListener('wheel', this.wheelEvent);
	}
}
async function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
</script>