
const messageSuccess = ({
    code = 000,
    data = null,
    isOk = false,
    message = ""
}) => {

    return {
        code: code,
        data: data,
        isOk: isOk,
        message: message,
    }

}

module.exports = messageSuccess;