
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


examenController.requestExamsToday = async (request, response) => {

    const resRequestExamsToday =
        await CRUD.requestExamsToday(connection);

    responseMsg(
        response,
        {
            code: resRequestExamsToday ? 201 : 400,
            data: resRequestExamsToday,
            isOk: resRequestExamsToday ? true : false,
            message: resRequestExamsToday ? msgToResponse[201] : msgToResponse[400]
        }
    )

}

examenController.requestExamsClientName = async (request, response) => {

    const _isValidData = isValidData(request.body);

    const resRequestExamsClientName = _isValidData
        ? await CRUD.requestExamsClientName(connection, request.body)
        : null;

    responseMsg(
        response,
        {
            code: resRequestExamsClientName ? 201 : 400,
            data: resRequestExamsClientName,
            isOk: resRequestExamsClientName ? true : false,
            message: resRequestExamsClientName
                ? (_isValidData ? msgToResponse[201] : msgToResponse.dataInvalid)
                : msgToResponse[400]
        }
    )
}

examenController.requestoInfoExamByID = async (request, response) => {

    const _isValidData = isValidData(request.body);

    const resRequestExamsClientName = _isValidData
        ? await CRUD.requestoInfoExamByID(connection, request.body)
        : null;

    responseMsg(
        response,
        {
            code: resRequestExamsClientName ? 201 : 400,
            data: resRequestExamsClientName,
            isOk: resRequestExamsClientName ? true : false,
            message: resRequestExamsClientName
                ? (_isValidData ? msgToResponse[201] : msgToResponse.dataInvalid)
                : msgToResponse[400]
        }
    )
}

examenController.recordResults = async (request, response) => {

    const _isValidData = isValidData(request.body);

    const resRequestExamsClientName = _isValidData
        ? await CRUD.recordResults(connection, request.body)
        : null;

    responseMsg(
        response,
        {
            code: resRequestExamsClientName ? 201 : 400,
            data: resRequestExamsClientName,
            isOk: resRequestExamsClientName ? true : false,
            message: resRequestExamsClientName
                ? (_isValidData ? msgToResponse[201] : msgToResponse.dataInvalid)
                : msgToResponse[400]
        }
    )

}

module.exports = examenController