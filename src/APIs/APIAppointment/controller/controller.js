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


module.exports = controller;