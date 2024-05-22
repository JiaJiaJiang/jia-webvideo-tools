const { Frame, GIF } = ImageScript;
/**
 *compress and encode GIF
 *
 * @export
 * @param {Array<{duration:Number,imageData:ImageData}>} frames
 * @param {{loop:Number,quality:Number}} options
 */
export async function encodeGIF(frames, options) {
	let lastChangedFrame;
	const { width, height } = frames[0].imageData,
		{ loop = -1 } = options;
	const tmpData = new Uint8ClampedArray(width * height * 4);
	const targetFrames = [];
	for (let frame of frames) {
		const imageData = frame.imageData;
		//获取此帧和上一帧的差异
		const diff = frameDiff(imageData, lastChangedFrame?.imageData, tmpData);
		if (diff === 0) {
			//不切换lastChangedFrame，以免积累的微小变化无法显示
			targetFrames[targetFrames.length - 1].duration += frame.duration;
		} else {
			const f = new Frame(diff.diffImageData.width, diff.diffImageData.height, frame.duration, diff.x, diff.y);
			f.bitmap = diff.diffImageData.data;
			targetFrames.push(f);
			lastChangedFrame = frame;
		}
	}
	const gif = new GIF(targetFrames, loop);
	const buf = await gif.encode(90);
	const url = URL.createObjectURL(new Blob([buf], { type: "image/gif" }));
	return url;
}

function frameDiff(newImageData, preImageData, tmpData) {
	/* 返回0表示无变化，否则返回对象{x,y,diffImageData} */
	if (!preImageData) return { x: 0, y: 0, diffImageData: newImageData };
	const { width, height } = newImageData;
	const maxDiffValue = 5;
	let leftTop = [width, height], rightBottom = [0, 0];
	const newData = newImageData.data, preData = preImageData.data;
	//只更新这一帧相对上一帧完整画面的不同之处，并进行裁剪
	for (let x = 0; x < width; x++) {
		for (let y = 0; y < height; y++) {
			//忽略位于leftTop和rightBottom中间的点
			const i = (y * width + x) * 4;
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
	const genImageData = new ImageData(newWidth, newHeight);
	if (newWidth === width && newHeight === height) {
		genImageData.data.set(tmpData);
	} else {
		for (let row = 0; row < newHeight; row++) {
			const startI = (leftTop[1] + row) * width * 4 + leftTop[0] * 4;
			genImageData.data.set(tmpData.subarray(startI, startI + newWidth * 4), row * newWidth * 4);
		}
	}
	return {
		x: leftTop[0], y: leftTop[1], diffImageData: genImageData
	};
}