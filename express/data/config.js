const mysql = require('mysql');

//Set database connection credentials
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api',
};

//Create a MySql pool
const pool = mysql.createPool(config);

//Export the pool
module.exports = pool;