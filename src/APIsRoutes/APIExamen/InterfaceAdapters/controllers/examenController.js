
const { response, request } = require("express");
const Exam = require("../../../../entities/Exam");

const examenController = {};

/**
 *
 * @param {request} request
 * @param {response} response
 */
examenController.requestExamTypes = async (request, response) => {
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