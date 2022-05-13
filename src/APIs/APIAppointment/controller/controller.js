const { response, request } = require("express");
const connection = require("../../../Frameworks/database/mysql/connection");
const { transporter, mailOptions } = require("../../../Frameworks/services/nodemailer/config");
const isValidData = require("../../../utils/isValidData/isValidData");
const msgToResponse = require("../../../utils/messagesResponse/msgToResponse");
const responseMsg = require("../../../utils/messagesResponse/response");
const CRUD = require("../CRUD/CRUD");

const controller = {};


/**
 *
 * @param {request} request
 * @param {response} response
 */
controller.getAvailableHoursDay = async (request, response) => {

    console.log(request.query);

    const resGetAvailableHoursDay = isValidData(request.query)
        ? await CRUD.getAvailableHoursDay(connection, request.query)
        : null;

    responseMsg(
        response,
        {
            code: resGetAvailableHoursDay === null ? 404 : 202,
            data: resGetAvailableHoursDay,
            isOk: resGetAvailableHoursDay === null ? false : true,
            message: resGetAvailableHoursDay === null ? msgToResponse[404] : msgToResponse[202]
        }
    );

}


/**
 *
 * @param {request} request
 * @param {response} response
 */
controller.updateAppointment = async (request, response) => {

    const resCreateAppointment = isValidData(request.body)
        ? await CRUD.updateAppointment(connection, request.body)
        : null;

    responseMsg(
        response,
        {
            code: resCreateAppointment === null ? 404 : 201,
            data: resCreateAppointment,
            isOk: resCreateAppointment === null ? false : true,
            message: resCreateAppointment === null ? msgToResponse[404] : msgToResponse[201]
        }
    );

}


/**
 *
 * @param {request} request
 * @param {response} response
 */
controller.requestAppointmentsDay = async (request, response) => {

    const resRequestAppointmentsDay = isValidData(request.query)
        ? await CRUD.requestAppointmentsDay(connection, request.query)
        : null;

    if (resRequestAppointmentsDay === "Invalid Date") {
        responseMsg(
            response,
            {
                code: 404,
                data: resRequestAppointmentsDay,
                isOk: false,
                message: msgToResponse[404]
            }
        );
        return;
    }

    responseMsg(
        response,
        {
            code: resRequestAppointmentsDay === null ? 404 : 201,
            data: resRequestAppointmentsDay,
            isOk: resRequestAppointmentsDay === null ? false : true,
            message: resRequestAppointmentsDay === null ? msgToResponse[404] : msgToResponse[201]
        }
    );

}


controller.markAppointmentAsProgress = async (request, response) => {

    const _isValidData = isValidData(request.body);

    const resMarkAppointmentAsProgress = _isValidData
        ? await CRUD.markAppointmentAsProgress(connection, request.body)
        : null;

    responseMsg(
        response,
        {
            code: resMarkAppointmentAsProgress === null ? 404 : 200,
            data: resMarkAppointmentAsProgress,
            isOk: resMarkAppointmentAsProgress === null ? false : true,
            message: resMarkAppointmentAsProgress === null
                ? (_isValidData ? msgToResponse[404] : msgToResponse.dataInvalid)
                : msgToResponse[200]
        }
    );
}


/**
 *
 * @param {request} request
 * @param {response} response
 */
controller.searchAppointmentsByClientName = async (request, response) => {

    const _isValidData = isValidData(request.query);

    const resSearchAppointmentsByClientName = _isValidData
        ? await CRUD.searchAppointmentsByClientName(connection, request.query)
        : null;

    responseMsg(
        response,
        {
            code: resSearchAppointmentsByClientName === null ? 404 : 200,
            data: resSearchAppointmentsByClientName,
            isOk: resSearchAppointmentsByClientName === null ? false : true,
            message: resSearchAppointmentsByClientName === null
                ? (_isValidData ? msgToResponse[404] : msgToResponse.dataInvalid)
                : msgToResponse[200]
        }
    );

}


controller.markAppointmentAsComplete = async (request, response) => {

    const _isValidData = isValidData(request.body);

    const resMarkAppointmentAsProgress = _isValidData
        ? await CRUD.markAppointmentAsComplete(connection, request.body)
        : null;

    responseMsg(
        response,
        {
            code: resMarkAppointmentAsProgress === null ? 404 : 200,
            data: resMarkAppointmentAsProgress,
            isOk: resMarkAppointmentAsProgress === null ? false : true,
            message: resMarkAppointmentAsProgress === null
                ? (_isValidData ? msgToResponse[404] : msgToResponse.dataInvalid)
                : msgToResponse[200]
        }
    );
}


controller.createAppointment = async (request, response) => {

    const res = await CRUD.createAppointment(connection, request.body);

    responseMsg(
        response,
        {
            code: res === null ? 404 : 200,
            data: res,
            isOk: res === null ? false : true,
            message: res === null
                ? (_isValidData ? msgToResponse[404] : msgToResponse.dataInvalid)
                : msgToResponse[200]
        }
    );
}


module.exports = controller;