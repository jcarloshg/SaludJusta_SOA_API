
//============================================================
// his name -> marcarCitaComoEncurso()
// data ->
//      [idAppointment] is the id from an Appointment
//============================================================

const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");
const readAppointment = require("./readAppointment");

const markAppointmentAsComplete = async (connection, data) => {

    try {

        const { idAppointment } = data;

        const query = `UPDATE Appointment SET status = "FINALIZADA" WHERE idAppointment = ${idAppointment}`;
        const appointment = await conectionQuery(connection, query);

        const resReadAppointment =
            await readAppointment(connection, { idAppointment: idAppointment });

        return resReadAppointment;


    } catch (error) {
        console.log(`[markAppointmentAsProgress] -> `, error);
        return null;
    }

}

module.exports = markAppointmentAsComplete;
