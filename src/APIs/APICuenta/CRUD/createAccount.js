
const User = require("../../../entities/User");

/**
 *
 * @param {*} connection
 * @param {object} data
 * @returns {User} User
 */
const createAccount = async (connection, data) => {

    const userData = new User(data);

    if (userData.isPropertiesNull() == true) return null;
    if (userData.isPropertiesVoid() == true) return null;

    const query =
        "INSERT INTO User( name, lastName, phoneNumber, gender, email, password, role) values " +
        `('${userData.name}','${userData.lastName}','${userData.phoneNumber}','${userData.gender}','${userData.email}','${userData.password}','${userData.role}');`;

    const userQuery = new Promise((resolve, reject) =>
        connection.query(
            query,
            (error, results, fields) => error ? reject(error) : resolve(results)
        )
    );

    try {
        const user = await userQuery;
        const idNewClient = user.insertId;
        return user ? new User({ id: idNewClient, ...data }) : null;
    } catch (error) {
        console.log(error);
        return error;
    }

}

module.exports = createAccount;