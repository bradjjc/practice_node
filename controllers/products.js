
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // __dirname 우리 운영체제의 절대 경로를 이 프로젝트 폴더로 고정해주는 변수 __dirname route 폴더를 가르킴
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {
        pageTitle: 'Shop', 
        path: '/admin/add-product', 
        activeAddProduct: true, 
        formsCSS: true,
        productCSS: true,
    });
}

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop', {
        prods: products, 
        pageTitle: 'Add Product', 
        path: '/', 
        hasProducts : products.length > 0,
        activeShop: true,
        productCSS: true,
    });
}