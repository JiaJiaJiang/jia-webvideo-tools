'use strict';
process.on('uncaughtException', err => console.error(err));
const ViteExpress = require('vite-express');
const app = require('express')();
ViteExpress.listen(app, 3050, () => {
	console.log('Server is Ready, visit http://127.0.0.1:3050/test/');
});