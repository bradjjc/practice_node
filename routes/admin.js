const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    // __dirname 우리 운영체제의 절대 경로를 이 프로젝트 폴더로 고정해주는 변수 __dirname route 폴더를 가르킴
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {
        pageTitle: 'Shop', 
        path: '/admin/add-product', 
        activeAddProduct: true, 
        formsCSS: true,
        productCSS: true,
    });
});

// /admin/add-product => POST
router.post('/add-product', (req, res) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.router = router;
exports.products = products