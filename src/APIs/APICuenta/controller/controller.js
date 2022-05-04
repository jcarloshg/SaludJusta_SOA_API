
const { response, request } = require("express");
const connection = require("../../../Frameworks/database/mysql/connection");
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
controller.existAccount = async (request, response) => {

    const _isValidData = isValidData(request.query);

    const resExistAccount = _isValidData
        ? await CRUD.existAccount(connection, request.query)
        : null;

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

    const _isValidData = isValidData(request.body);

    const resExistAccount = _isValidData
        ? await CRUD.createAccount(connection, request.body)
        : null;

    responseMsg(
        response,
        {
            code: resExistAccount === null ? 400 : 201,
            data: resExistAccount,
            isOk: resExistAccount === null ? false : true,
            message: resExistAccount === null
                ? msgToResponse[400]
                : msgToResponse[201]
        }
    )
}


/**
 *
 * @param {request} request
 * @param {response} response
 */
controller.loggin = async (request, response) => {

    const _isValidData = isValidData(request.query);

    const resExistAccount = _isValidData
        ? await CRUD.loggin(connection, request.query)
        : null;

    responseMsg(
        response,
        {
            code: resExistAccount === null ? 404 : 202,
            data: resExistAccount,
            isOk: resExistAccount === null ? false : true,
            message: resExistAccount === null
                ? msgToResponse[404]
                : msgToResponse[202]
        }
    )
}



module.exports = controller;