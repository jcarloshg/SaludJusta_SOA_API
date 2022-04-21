const Appointment = require("../../../entities/Appointment");


const getAvailableHoursDay = async (connection, data) => {

    const query = "SELECT * FROM Appointment INNER JOIN ExamCatalog ON ExamCatalog.idExamCatalog = Appointment.FK_ExamCatalog WHERE typeExam = 'ESPIROMETRÍA';";

    const hoursQuery = new Promise((resolve, reject) => connection.query(
        query,
        (error, results, fields) => {
            error
                ? reject(error)
                : resolve(results)
        }
    ));

    try {
        const appointments = await hoursQuery;
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