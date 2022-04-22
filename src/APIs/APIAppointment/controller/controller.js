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

    const resGetAvailableHoursDay = isValidData(request.body)
        ? await CRUD.getAvailableHoursDay(connection, request.body)
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

    const resRequestAppointmentsDay = isValidData(request.body)
        ? await CRUD.requestAppointmentsDay(connection, request.body)
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

    const resMarkAppointmentAsProgress = isValidData(request.body)
        ? await CRUD.markAppointmentAsProgress(connection, response.data)
        : null;

    responseMsg(
        response,
        {
            code: resMarkAppointmentAsProgress === null ? 404 : 201,
            data: resMarkAppointmentAsProgress,
            isOk: resMarkAppointmentAsProgress === null ? false : true,
            message: resMarkAppointmentAsProgress === null ? msgToResponse[404] : msgToResponse[201]
        }
    );
}

module.exports = controller;