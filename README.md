# jia-webvideo-tools

Tampermonkey script: https://gist.github.com/JiaJiaJiang/736f5a90b55b815a0e9eb6463dd09061

Load this script to the page and the function will be triggered by the following events.

### Alt + Right_mouse_button on video area

Quickly take a video screenshot, the image will popup on the page, then you can save it or just close it by clicking any area.

### Alt + Shift + Right_mouse_button on video area

Show the video toolbar at the mouse pointer position.

In the toolbar, you can:

* Take video screenshot.
* Record a GIF.
	* Area range selecting.
	* **Not available for unauthenticated cross-origin videos**.
* Fine-tune video time.
* Input or get current video time.

### (Alt or Shift) + (Left or Right Arrow) at any area

This shortcut is for animes that have 90 seconds OP or ED, you can skip it by pressing the shortcut.

Since this is a function triggered directly by a keyboard shortcut, the following rules apply for finding videos on the page:

* Videos shorter than 300 seconds will be ignored.
* If there are multiple videos on the page, the currently playing video will be selected.
* If there is no video playing, the last video that triggered the mouse shortcut function will be selected.
* Otherwise, the first video on the page will be selected.