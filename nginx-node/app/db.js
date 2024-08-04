const config = {
    host: 'db',
    user: 'root',
    password: 'T2245RFHG_9jfd',
    database: 'nodedb'
};

const mysql = require("mysql");
const db = mysql.createConnection(config);

module.exports = db;