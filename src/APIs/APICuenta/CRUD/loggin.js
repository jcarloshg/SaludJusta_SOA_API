
const User = require("../../../entities/User");

const loggin = async (connection, data) => {

    const { email, password } = data;

    const query = `SELECT * FROM User WHERE email = '${email}' AND password = '${password}'`;

    const userQuery = new Promise((resolve, reject) =>
        connection.query(
            query,
            (error, results, fields) => error ? reject(error) : resolve(results)
        )
    );

    try {
        const user = await userQuery;
        return user[0] === undefined ? null : new User(user[0]);
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = loggin;