const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "saludjustamysql.cz53yjspahy4.us-west-1.rds.amazonaws.com",
    user: "admin",
    password: "saludjusta654",
    port: "3306"
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }

    console.log(' -> Connected to database [SaludJusta]');
});

connection.query(
    'use SaludJustaDB;',
    (error, results, fields) => {

        if (error != null) {
            console.log(`[error] -> `, error);
            throw error;
        }
        console.log(' -> this conexion use database [SaludJustaDB]');
    }
);


module.exports = connection;
