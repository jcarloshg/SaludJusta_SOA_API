
const { response, request } = require("express");

const examenController = {};

/**
 *
 * @param {request} request
 * @param {response} response
 */
examenController.requestExamTypes = async (request, response) => {
    response.status(200).json({ requestExamTypes: "ok" });
}



module.exports = examenController;