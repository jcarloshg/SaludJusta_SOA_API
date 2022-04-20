const User = require("../../../entities/User");


/**
 *
 * @param {*} connection
 * @param {object} data
 * @returns {User} User
 */
const existAccount = async (connection, data) => {

    const query = `SELECT * FROM User WHERE email = '${data.email}';`;

    const userQuery = new Promise((resolve, reject) =>
        connection.query(
            query,
            (error, results, fields) => error ? reject(error) : resolve(results)
        )
    );

    try {
        const user = await userQuery;
        return user[0] === undefined ? null : new User(user);
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = existAccount;

