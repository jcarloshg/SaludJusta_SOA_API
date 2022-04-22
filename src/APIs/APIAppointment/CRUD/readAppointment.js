

//============================================================
// his name -> getAppointment()
// data ->
//      [idAppointment] is the id from an Appointment
//============================================================

const Appointment = require("../../../entities/Appointment");
const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");

const readAppointment = async (connection, data) => {

    const { idAppointment } = data;

    const query = `SELECT * FROM Appointment WHERE idAppointment = ${idAppointment};`;

    try {
        const appointment = await conectionQuery(connection, query);
        return new Appointment({ ...appointment[0] });
    } catch (error) {
        console.log(error);
        return null;
    }

    console.log(`[readAppointment]`);

}

module.exports = readAppointment;