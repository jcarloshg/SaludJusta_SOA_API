

//============================================================
// his name -> marcarCitaComoEncurso()
// data ->
//      [idAppointment] -> is the id from an Appointment to update
//      [FK_UserClient] -> is the id from user with role [Client]
//      [FK_Exam]       -> is the id from exam
//============================================================

// * NOTE -> if [appointment.changedRows] is 0, then nothing update

const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");
const readAppointment = require("./readAppointment");

const updateAppointment = async (connection, data) => {

    const { FK_UserClient, FK_Exam, idAppointment } = data;

    try {

        const query = `UPDATE Appointment SET FK_Exam = ${FK_Exam}, FK_UserClient = ${FK_UserClient}, status = "EN ESPERA" WHERE idAppointment = ${idAppointment}`;
        const appointment = await conectionQuery(connection, query);

        const resReadAppointment =
            await readAppointment(connection, { idAppointment: idAppointment });

        return resReadAppointment;

    } catch (error) {
        console.log(error);
        return null;
    }

}

module.exports = updateAppointment;