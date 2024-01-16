const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node-complete', 'root', 'Bbangtto@2285', 
    {
        dialect: 'mysql',
        host: 'localhost',
    });

module.exports = sequelize;