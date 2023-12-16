const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(adminData.products);
    // __dirname 우리 운영체제의 절대 경로를 이 프로젝트 폴더로 고정해주는 변수 __dirname route 폴더를 가르킴
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;