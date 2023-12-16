const path = require('path');

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    // __dirname 우리 운영체제의 절대 경로를 이 프로젝트 폴더로 고정해주는 변수 __dirname route 폴더를 가르킴
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res) => {
    console.log(req.body['title']);
    res.redirect('/');
});

module.exports = router;