
//============================================================
// his name -> buscarExamenesPorNombreCliente()
//
// data ->
//      [name]  -> name's user with role [client]
//
// return   -> return [Appointments] that include one and only one [Exam]
//============================================================

const Exam = require("../../../entities/Exam");
const Appointment = require("../../../entities/Appointment");
const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");

const requestExamsClientName = async (connection, data) => {

    const { name } = data;

    try {

        const query =
            "SELECT * FROM User " +
            "INNER JOIN Appointment ON Appointment.FK_UserClient = User.idUser " +
            "INNER JOIN Exam ON Exam.idExam = Appointment.FK_Exam " +
            `WHERE status = 'EN CURSO' AND name = '${name}' ` +
            "ORDER BY time ASC;";

        const infoExams = await conectionQuery(connection, query);

        return infoExams.map(obj => {
            const exam = new Exam(obj);
            return new Appointment({ ...obj, exam: exam });
        })

    } catch (error) {
        console.log(`[requestExamsToday] -> `, error);
        return null;
    }



    return await "requestExamsClientName is Ok";
    console.log(`[requestExamsClientName]`);

}

module.exports = requestExamsClientName;