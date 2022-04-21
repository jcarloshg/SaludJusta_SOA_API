const Appointment = require("../../../entities/Appointment");


const getAvailableHoursDay = async (connection, data) => {

    const { typeExam, date } = data;

    const query =
        "SELECT * FROM Appointment INNER JOIN ExamCatalog " +
        "ON ExamCatalog.idExamCatalog = Appointment.FK_ExamCatalog " +
        "WHERE " +
        `typeExam = '${typeExam}' ` +
        `AND date = '${date}' ` +
        `AND status = 'NO ASIGNADA';`;

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
        // console.log(`[appointments[0]] -> `, appointments[0]);
        return appointments[0] === undefined
            ? null
            : appointments.map(appointment => new Appointment(appointment))
    } catch (error) {
        console.log(error);
        return error;
    }

}

module.exports = getAvailableHoursDay;