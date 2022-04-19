const { Router } = require("express");
const connection = require("../Frameworks/database/mysql/connection");

const utilsRouter = Router();


utilsRouter.get('/', (request, response) => {
    response
        .status(200)
        .json({ mensaje: "Esta API funciona como back-end del proyecto SaludJusta" });
})



utilsRouter.get('/check_coneciont_mysql', (request, response) => {

    connection.query(
        'SELECT * from CatalogoExamen;',
        (error, results, fields) => {
            if (error) throw error;

            console.log('The solution is: ', results[0].solution);
        }
    );

    response.status(200).json({ requestExamTypes: "ok" });

    // connection.connect((err) => {
    //     if (err) {
    //         console.error('Database connection failed: ' + err.stack);
    //         response
    //             .status(200)
    //             .json(err);
    //         return;
    //     }

    //     console.log('Connected to database.');
    //     response
    //         .status(200)
    //         .json({ message: "Conecction sucess" });
    // });

    // connection.end();
});

module.exports = utilsRouter;