const { response, request } = require("express");
const connection = require("../../../Frameworks/database/mysql/connection");
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

    const resGetAvailableHoursDay = await CRUD.getAvailableHoursDay(connection, request.body);

    responseMsg(
        response,
        {
            code: resGetAvailableHoursDay === null ? 404 : 202,
            data: resGetAvailableHoursDay,
            isOk: resGetAvailableHoursDay === null ? false : true,
            message: resGetAvailableHoursDay === null ? msgToResponse[404] : msgToResponse[202]
        }
    )

}



module.exports = controller;