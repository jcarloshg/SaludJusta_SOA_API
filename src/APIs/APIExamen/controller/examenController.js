
const { response, request } = require("express");
const Exam = require("../../../entities/Exam"); // TODO - delete this line
const connection = require("../../../Frameworks/database/mysql/connection");
const CRUD = require("../CRUD/CRUD");

const examenController = {};

/**
 *
 * @param {request} request
 * @param {response} response
 */
examenController.requestExamTypes = async (request, response) => {

    const responseRequestExamTypes = await CRUD.requestExamTypes(connection);

    response
        .status(200)
        .json({
            requestExamTypes: "ok",
            data: responseRequestExamTypes
        });
}


examenController.create_exam = async (request, response) => {

    // TODO - delete these

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