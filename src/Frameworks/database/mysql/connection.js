const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "saludjustamysql.cz53yjspahy4.us-west-1.rds.amazonaws.com",
    user: "admin",
    password: "saludjusta654",
    port: "3306"
});



module.exports = connection;
