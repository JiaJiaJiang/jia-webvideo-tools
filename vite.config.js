import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
// https://vitejs.dev/config/
export default defineConfig({//https://cn.vitejs.dev/config/build-options
	root: './',
	plugins: [
		vue(),
		cssInjectedByJsPlugin(),
	],
	define: {
		'process.env': {},
	},
	build: {
		target: 'esnext',
		sourcemap: true,
		lib: {
			entry: resolve(__dirname, 'src/main.js'),
			name: 'jia_video_tools',
		},
		rollupOptions: {//https://rollupjs.org/configuration-options/
			output: {
				compact: true,
			},
			external: [
				'imagescript',
				// 'vue'
			],
		},
	},
	server: {
		origin: 'http://127.0.0.1:3050',
	},
})
