
const User = require("../../../entities/User");

/**
 *
 * @param {*} connection
 * @param {object} data
 * @returns {User} User
 */
const createAccount = async (connection, data) => {

    return await "createAccount is Ok";

    console.log(`[createAccount]`);

}

module.exports = createAccount;