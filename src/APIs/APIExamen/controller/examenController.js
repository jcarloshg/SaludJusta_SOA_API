
const { response, request } = require("express");
const connection = require("../../../Frameworks/database/mysql/connection");
const isValidData = require("../../../utils/isValidData/isValidData");
const msgToResponse = require("../../../utils/messagesResponse/msgToResponse");
const responseMsg = require("../../../utils/messagesResponse/response");
const CRUD = require("../CRUD/CRUD");

const examenController = {};

/**
 *
 * @param {request} request
 * @param {response} response
 */
examenController.requestExamTypes = async (request, response) => {

    const resRequestExamTypes = await CRUD.requestExamTypes(connection);


    responseMsg(
        response,
        {
            code: resRequestExamTypes ? 200 : 400,
            data: resRequestExamTypes,
            isOk: resRequestExamTypes ? true : false,
            message: resRequestExamTypes ? msgToResponse[201] : msgToResponse[400]
        }
    );
}


examenController.createExam = async (request, response) => {

    const resCreateExam = isValidData(request.body)
        ? await CRUD.createExam(connection, request.body)
        : null;

    responseMsg(
        response,
        {
            code: resCreateExam ? 201 : 400,
            data: resCreateExam,
            isOk: resCreateExam ? true : false,
            message: resCreateExam ? msgToResponse[201] : msgToResponse[400]
        }
    )

}



module.exports = examenController;