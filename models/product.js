const Sequelize = require('sequelize');

const sequelize = require('../util/database');

// Product is a model
const Product = sequelize.define('product', {
    // id is automatically created
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    // title is a string
    title: Sequelize.STRING,
    // price is a float
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    // imageUrl is a string
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    // description is a string
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}); 

module.exports = Product;