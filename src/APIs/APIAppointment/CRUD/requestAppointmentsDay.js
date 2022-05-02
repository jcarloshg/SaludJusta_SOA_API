
//============================================================
// his name -> solicitaCitasDelDia()
// data ->
//      [date] his format is YYYY-MM-DD -> 2022-04-21
//============================================================

const Appointment = require("../../../entities/Appointment");
const Exam = require("../../../entities/Exam");
const ExamCatalogItem = require("../../../entities/ExamCatalogItem");
const User = require("../../../entities/User");
const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");

const requestAppointmentsDay = async (connection, data) => {

    const { date } = data;

    if (new Date(date) === "Invalid Date") return "Invalid Date";
    if (isNaN(new Date(date))) return "Invalid Date";

    try {

        const query =
            "SELECT * FROM Appointment " +
            "INNER JOIN Exam ON Appointment.FK_Exam = Exam.idExam " +
            "INNER JOIN ExamCatalog ON Exam.FK_ExamCatalog = ExamCatalog.idExamCatalog " +
            "INNER JOIN User ON User.idUser = Appointment.FK_UserClient " +
            `WHERE status = 'EN ESPERA' AND date = '${date}' ` +
            "ORDER BY time ASC;";

        const infoAppointments = await conectionQuery(connection, query);

        // return appointments
        //     ? appointments.map(appointment => new Appointment(appointment))
        //     : null;

        return infoAppointments.map(infoAppointment => {

            const examCatalogItem = new ExamCatalogItem(infoAppointment);
            const auxExam = new Exam({ ...infoAppointment, examCatalogItem: examCatalogItem });
            const appointment = new Appointment({ ...infoAppointment, exam: auxExam });
            const user = new User({ ...infoAppointment, appointments: [appointment] });

            return user;
        })

    } catch (error) {
        console.log(error);
        return error;
    }

}

module.exports = requestAppointmentsDay;