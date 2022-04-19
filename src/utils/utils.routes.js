const { Router } = require("express");
const connection = require("../Frameworks/database/mysql/connection");
const messageSuccess = require("./messagesResponse/messageSuccess");

const utilsRouter = Router();


utilsRouter.get('/', (request, response) => {
    response
        .status(200)
        .json({ mensaje: "Esta API funciona como back-end del proyecto SaludJusta" });
})



utilsRouter.get('/check_coneciont_mysql', (request, response) => {

    connection.query(
        'use SaludJustaDB;',
        (error, results, fields) => {

            if (error != null) {
                console.log(`[error] -> `, error);
                response.status(200).json(error);
                return;
            }

            response
                .status(200)
                .json(
                    messageSuccess({
                        code: 200,
                        data: results,
                        isOk: true,
                        message: "check coneciont mysql is OK"
                    })
                );

        }
    );

    // connection.end();
});

module.exports = utilsRouter;