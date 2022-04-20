
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

    const query = `INSERT INTO User( name, lastName, phoneNumber, gender, email, password, role) values ('${userData.name}','${userData.lastName}','${userData.phoneNumber}','${userData.gender}','${userData.email}','${userData.password}','${userData.role}');`;

    console.log(`[query] -> `, query);

    const userQuery = new Promise((resolve, reject) =>
        connection.query(
            query,
            (error, results, fields) => error ? reject(error) : resolve(results)
        )
    );

    try {
        const user = await userQuery;
        console.log(user);
        return await "createAccount is Ok";
        // return user[0] === undefined ? null : new User(user[0]);
    } catch (error) {
        console.log(error);
        return error;
    }

    console.log(`[query] -> `, query);

    return await "createAccount is Ok";

    console.log(`[createAccount]`);

}

module.exports = createAccount;