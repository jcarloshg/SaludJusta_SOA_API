const Appointment = require("../../../entities/Appointment");


const getAvailableHoursDay = async (connection, data) => {

    const hoursQuery = new Promise((resolve, reject) => connection.query(
        'SELECT * FROM Appointment;',
        (error, results, fields) => {
            error
                ? reject(error)
                : resolve(results)
        }
    ));

    try {
        const appointments = await hoursQuery;

        console.log(`[appointments[0]] -> `, appointments[0]);

        return appointments[0] === undefined
            ? null
            : appointments.map(appointment => new Appointment(appointment))
    } catch (error) {
        console.log(error);
        return error;
    }

    return await "getAvailableHoursDay";

}

module.exports = getAvailableHoursDay;