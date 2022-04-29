
const User = require("../../../entities/User");
const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");

/**
 *
 * @param {*} connection
 * @param {object} data
 * @returns {User} User
 */
const existAccount = async (connection, data) => {

    try {

        const { email } = data;
        const query = `SELECT * FROM User WHERE email = '${email}';`;

        const resExistAccount = await conectionQuery(connection, query);

        return resExistAccount.length === 0
            ? null
            : new User(resExistAccount[0]);

    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = existAccount;

