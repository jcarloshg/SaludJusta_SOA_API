
//============================================================
// his name -> solicitaCitasDelDia()
// data ->
//      [date] his format is YYYY-MM-DD -> 2022-04-21
//============================================================

const Appointment = require("../../../entities/Appointment");
const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");

const requestAppointmentsDay = async (connection, data) => {

    const { date } = data;

    if (new Date(date) === "Invalid Date") return "Invalid Date";
    if (isNaN(new Date(date))) return "Invalid Date";

    try {

        const query = `SELECT * FROM Appointment WHERE status = "EN ESPERA" AND date ='${date}'`;;

        const appointments = await conectionQuery(connection, query);

        return appointments
            ? appointments.map(appointment => new Appointment(appointment))
            : null;

    } catch (error) {
        console.log(error);
        return error;
    }

}

module.exports = requestAppointmentsDay;