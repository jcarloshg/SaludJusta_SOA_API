
const { response } = require("express");


/**
 *
 * @param {response} response
 */
const responseMsg = (response, {
    code = 100,
    data = null,
    isOk = false,
    message = ""
}) => {

    response
        .status(code)
        .json(
            {
                code: code,
                data: data,
                isOk: isOk,
                message: message,
            }
        );

}

module.exports = responseMsg;