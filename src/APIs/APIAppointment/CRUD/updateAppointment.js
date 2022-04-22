
// * NOTE this function get an [Appointment]
// this function only update an Appointment with data :
// -> FK_User (role CLIENT)
// -> FK_Exam

const Appointment = require("../../../entities/Appointment");

const updateAppointment = async (connection, data) => {

    // get data
    const { FK_UserClient, FK_Exam } = data;
    const _appointment = new Appointment(JSON.parse(data.appointment));

    const query = `UPDATE Appointment SET FK_Exam = ${FK_Exam}, FK_UserClient = ${FK_UserClient}, status = "EN ESPERA" WHERE idAppointment = ${_appointment.idAppointment}`;

    const updateAppointmentQuery = new Promise((resolve, reject) => connection.query(
        query,
        (error, results, fields) => {
            error ? reject(error) : resolve(results)
        }
    ));

    try {
        const appointment = await updateAppointmentQuery;

        return appointment
            ? new Appointment({
                ..._appointment,
                status: "EN ESPERA",
                FK_UserClient: FK_UserClient,
                FK_Exam: FK_Exam
            })
            : null;

    } catch (error) {
        console.log(error);
        return error;
    }

}

module.exports = updateAppointment;