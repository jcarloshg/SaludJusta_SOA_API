
//============================================================
// his name -> solicitaCitasDelDia()
// data ->
//      [date] his format is YYYY-MM-DD -> 2022-04-21
//============================================================

const Appointment = require("../../../entities/Appointment");

const requestAppointmentsDay = async (connection, data) => {

    const { date } = data;

    if (new Date(date) === "Invalid Date") return "Invalid Date";
    if (isNaN(new Date(date))) return "Invalid Date";

    const query = `SELECT * FROM Appointment WHERE status = "EN ESPERA" AND date ='${date}'`;

    const appointmentsDayQuery = new Promise((resolve, reject) => connection.query(
        query,
        (error, results, fields) => {
            error
                ? reject(error)
                : resolve(results)
        }
    ));

    try {

        const appointments = await appointmentsDayQuery;

        return appointments
            ? appointments.map(appointment => new Appointment(appointment))
            : null;

    } catch (error) {
        console.log(error);
        return error;
    }

}

module.exports = requestAppointmentsDay;