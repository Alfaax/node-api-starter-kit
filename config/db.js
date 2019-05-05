'user strict';

var mysql = require('mysql');
var config = require('./config');

//local mysql db connection
var connection = mysql.createPool({
    host     : config.db_host,
    port     : config.db_port,
    user     : config.db_user,
    password : config.db_password,
    database : config.db_name
});


module.exports = connection;
