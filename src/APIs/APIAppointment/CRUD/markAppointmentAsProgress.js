
//============================================================
// his name -> marcarCitaComoEncurso()
// data ->
//      [idAppointment] is the id from an Appointment to update
//============================================================

const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");
const readAppointment = require("./readAppointment");

const markAppointmentAsProgress = async (connection, data) => {

    const { idAppointment } = data;

    try {

        const query = `UPDATE Appointment SET status = "EN CURSO" WHERE idAppointment = ${idAppointment}`;
        const appointment = await conectionQuery(connection, query);

        const resReadAppointment =
            await readAppointment(connection, { idAppointment: idAppointment });

        return resReadAppointment;


    } catch (error) {
        console.log(`[markAppointmentAsProgress] -> `, error);
        return null;
    }

}

module.exports = markAppointmentAsProgress;