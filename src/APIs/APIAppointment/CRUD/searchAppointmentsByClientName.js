
//============================================================
// his name -> buscarCitasPorNombreCliente()
// data ->
//      [name]  -> is the user's name to search appointments
//============================================================

const Appointment = require("../../../entities/Appointment");
const Exam = require("../../../entities/Exam");
const ExamCatalogItem = require("../../../entities/ExamCatalogItem");
const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");

const searchAppointmentsByClientName = async (connection, data) => {

    const { name } = data;

    try {

        const query =
            "SELECT * FROM Appointment " +
            "INNER JOIN Exam ON Appointment.FK_Exam = Exam.idExam " +
            "INNER JOIN ExamCatalog ON Exam.FK_ExamCatalog = ExamCatalog.idExamCatalog " +
            "INNER JOIN User ON User.idUser = Appointment.FK_UserClient " +
            `WHERE name = "${name}" ` +
            "ORDER BY time ASC;";

        const resSearchAppointmentsByClientName = await conectionQuery(connection, query);

        console.log(resSearchAppointmentsByClientName);

        return resSearchAppointmentsByClientName.map(appoint => {

            const examCatalogItem = new ExamCatalogItem({ ...appoint });
            const exam = new Exam({ ...appoint, examCatalogItem: examCatalogItem });
            const appointment = new Appointment({ ...appoint, exam: exam });

            return appointment;

        });

    } catch (error) {
        console.log(`[searchAppointmentsByClientName] -> `, error);
        return null;
    }

}

module.exports = searchAppointmentsByClientName;