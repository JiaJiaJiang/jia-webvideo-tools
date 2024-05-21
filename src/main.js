import { createApp } from 'vue'
import App from './app.vue'
const app = createApp(App);
const div = document.createElement('div');
div.style = 'position:fixed;top:0;left:0;z-index:2147483647;font-size: 12px!important;';
let vm;
/* 
events to trigger toolbar
*/
let lastVideo;
window.addEventListener('mousedown', ev => {
	if (!(ev.button === 2 && ev.altKey)) return;
	ev.preventDefault();
	ev.stopPropagation();
	if (lastVideo && !document.contains(lastVideo)) {
		lastVideo = null;
	}
	let target = ev.target;
	let v;
	if (target.localName === 'video') {
		v = target;
	} else {//查找子元素是否有video
		v = target.querySelector('video');
	}
	if (!v) {//查找父元素是否有子元素是否有video
		let limit = 5;
		while (limit--) {
			target = target.parentNode;
			if (target === document) break;
			v = target.querySelector('video');
			if (v) {
				break;
			}
		}
	}
	if (!v) v = lastVideo;
	else {
		lastVideo = v;
		if (!vm) {
			document.body.appendChild(div);
			vm = app.mount(div);
		}
		vm.show(ev.clientX, ev.clientY, v, ev.shiftKey ? undefined : 'screenshot');
	}
});
document.addEventListener('contextmenu', ev => {
	if (!vm || !vm.showing || !ev.altKey) return;
	ev.preventDefault();
	ev.stopPropagation();
});

//快捷跳转
window.addEventListener('keydown', ev => {
	if (!ev.code.startsWith('Arrow') || !(ev.ctrlKey || ev.shiftKey) || ev.repeat) return;
	//寻找目标video
	let video, matchedLastVideo;
	const videos = [...document.querySelectorAll('video')].filter(v => {
		if (v === lastVideo) matchedLastVideo = v;
		return v.duration >= 300;
	});//忽略5分钟以下的视频
	if (videos.length === 0) return;
	if (videos.length > 1) {
		video = videos.filter(v => !v.paused)[0];//多于一个常规视频时选择正在播放的第一个视频
	} else if (matchedLastVideo) {//存在上一个被鼠标选中的视频
		video = matchedLastVideo;
	} else {
		video = videos[0];
	}
	if (!video) return;
	if (ev.code === 'ArrowRight' || ev.code === 'ArrowLeft') {
		ev.preventDefault();
		ev.stopPropagation();
	}
	switch (ev.code) {
		case 'ArrowRight':
			//播放速度越快，考虑到反应时间，快进的时间应该越少
			video.currentTime += (90 - (video.playbackRate) * 5); break;//预估5秒反应时间
		case 'ArrowLeft':
			video.currentTime -= 90; break;
	}
})