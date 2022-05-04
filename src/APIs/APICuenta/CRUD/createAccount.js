
const User = require("../../../entities/User");
const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");

/**
 *
 * @param {*} connection
 * @param {object} data
 * @returns {User} User
 */
const createAccount = async (connection, data) => {

    // if (userData.isPropertiesNull() == true) return null;
    // if (userData.isPropertiesVoid() == true) return null;

    try {

        const userData = new User(data);

        const query =
            "INSERT INTO User( name, lastName, age, phoneNumber, gender, email, password, role) values " +
            `('${userData.name}','${userData.lastName}', ${userData.age}, '${userData.phoneNumber}','${userData.gender}','${userData.email}','${userData.password}','${userData.role}');`;;

        const user = await conectionQuery(connection, query);
        const idNewClient = user.insertId;
        return user ? new User({ id: idNewClient, ...data }) : null;

        // const user = await userQuery;
        // const idNewClient = user.insertId;
        // return user ? new User({ id: idNewClient, ...data }) : null;
    } catch (error) {
        console.log(error);
        return error;
    }

}

module.exports = createAccount;