
const { response, request } = require("express");
const Exam = require("../../../../entities/Exam");
const connection = require("../../../../Frameworks/database/mysql/connection");

const examenController = {};

/**
 *
 * @param {request} request
 * @param {response} response
 */
examenController.requestExamTypes = async (request, response) => {

    connection.query(
        'SELECT * from CatalogoExamen;',
        (error, results, fields) => {
            if (error) throw error;

            console.log('The solution is: ', results[0].solution);
        }
    );

    response.status(200).json({ requestExamTypes: "ok" });
}


examenController.create_exam = async (request, response) => {

    console.log(`[request.body] -> `, request.body);

    // const {
    //     fechaHora,
    //     status,
    //     resultados,
    //     type,
    //     cost,
    // } = request.body;
    // console.log(fechaHora);

    const examen = new Exam({
        cost: 0,
        fechaHora: new Date(),
        resultados: null,
        status: "EN ESPERA",
        type: "EXAMEN VISTA",
    });

    response.status(200).json(examen);
}



module.exports = examenController;