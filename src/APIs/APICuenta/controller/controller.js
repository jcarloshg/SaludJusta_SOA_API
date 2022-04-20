
const { response, request } = require("express");
const connection = require("../../../Frameworks/database/mysql/connection");
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

    response
        .status(200)
        .json({
            existAccount: "ok",
            data: resExistAccount
        });
}

module.exports = controller;