
//============================================================
// his name -> buscarCitasPorNombreCliente()
// data ->
//      [name]  -> is the user's name to search appointments
//============================================================

const Appointment = require("../../../entities/Appointment");
const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");

const searchAppointmentsByClientName = async (connection, data) => {

    const { name } = data;

    try {

        const query =
            "SELECT * FROM Appointment INNER JOIN User ON User.idUser = Appointment.FK_UserClient WHERE " +
            `name = '${name}' ` +
            "ORDER BY date,time ASC;";

        const resSearchAppointmentsByClientName = await conectionQuery(connection, query);

        return resSearchAppointmentsByClientName.map(appointment => new Appointment(appointment));

    } catch (error) {
        console.log(`[searchAppointmentsByClientName] -> `, error);
        return null;
    }

}

module.exports = searchAppointmentsByClientName;