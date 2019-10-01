"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'blog-naver-com-donggyu-00',
    api_key: '549695488835179',
    api_secret: 'daxgUAkjrrLmxbfLCMJzgm8Xqbc'
});
exports.default = cloudinary;
