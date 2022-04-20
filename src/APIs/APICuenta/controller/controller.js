
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
controller.loggin = async (request, response) => {
    const responseLoggin = await CRUD.loggin(connection);

    response
        .status(200)
        .json({
            loggin: "ok",
            data: responseLoggin
        });
}


/**
 *
 * @param {request} request
 * @param {response} response
 */
controller.existAccount = async (request, response) => {

    const data = request.body;

    const resExistAccount = await CRUD.existAccount(connection, data);

    responseMsg(
        response,
        {
            code: resExistAccount === null ? 404 : 202,
            data: resExistAccount,
            isOk: resExistAccount === null ? false : true,
            message: resExistAccount === null ? msgToResponse[404] : msgToResponse[202]
        }
    )
}


/**
 *
 * @param {request} request
 * @param {response} response
 */
controller.createAccount = async (request, response) => {

    const resExistAccount = await CRUD.createAccount(connection, request.body);

    responseMsg(
        response,
        {
            code: resExistAccount === null ? 404 : 202,
            data: resExistAccount,
            isOk: resExistAccount === null ? false : true,
            message: resExistAccount === null ? msgToResponse[404] : msgToResponse[202]
        }
    )
}



module.exports = controller;