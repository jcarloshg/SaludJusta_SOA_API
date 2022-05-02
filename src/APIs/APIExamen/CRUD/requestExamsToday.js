
//============================================================
// his name -> solicitaExamenes()
//
// data     -> {}
//
// return   -> return [Appointments] that include one and only one [Exam]
//============================================================

const Appointment = require("../../../entities/Appointment");
const Exam = require("../../../entities/Exam");
const ExamCatalogItem = require("../../../entities/ExamCatalogItem");
const User = require("../../../entities/User");
const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");

const requestExamsToday = async (connection) => {

    const today = new Date('2022-04-21'); // TODO change to today
    const todayString = today.toISOString().split('T')[0];

    try {

        const query =
            "SELECT * FROM Exam " +
            "INNER JOIN ExamCatalog ON Exam.FK_ExamCatalog = ExamCatalog.idExamCatalog " +
            "INNER JOIN Appointment ON Appointment.FK_Exam = Exam.idExam " +
            "INNER JOIN User ON User.idUser = Appointment.FK_UserClient " +
            `WHERE status = 'EN CURSO' AND date = '${todayString}'` +
            "ORDER BY time ASC;";

        const infoExams = await conectionQuery(connection, query);

        return infoExams.map(infoExam => {

            const examCatalogItem = new ExamCatalogItem(infoExam);
            const auxExam = new Exam({ ...infoExam, examCatalogItem: examCatalogItem });
            const appointment = new Appointment({ ...infoExam, exam: auxExam });
            const user = new User({ ...infoExam, appointments: [appointment] });
            // console.log(`[examCatalogItem] -> `, examCatalogItem);
            // console.log(`[auxExam] -> `, auxExam);
            // console.log(`[appointment] -> `, appointment);
            // console.log(`[user] -> `, user);

            return user;
        });

    } catch (error) {
        console.log(`[requestExamsToday] -> `, error);
        return null;
    }

}

module.exports = requestExamsToday;