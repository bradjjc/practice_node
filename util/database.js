const mysql = require('mysql2');

const pool =mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'Bbangtto@2285'
});

module.exports = pool.promise();