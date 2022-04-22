
//============================================================
// his name -> solicitaExamenes()
//
// data     -> {}
//
// return   -> return [Appointments] that include one and only one [Exam]
//============================================================

const Appointment = require("../../../entities/Appointment");
const Exam = require("../../../entities/Exam");
const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");

const requestExamsToday = async (connection) => {

    const today = new Date('2022-04-21'); // TODO change to today
    const todayString = today.toISOString().split('T')[0];

    try {

        const query =
            "SELECT * FROM Exam INNER JOIN Appointment ON Appointment.FK_Exam = Exam.idExam " +
            `WHERE status = 'EN ESPERA' AND date = '${todayString}'` +
            "ORDER BY time ASC;";

        const infoExams = await conectionQuery(connection, query);

        return infoExams.map(infoExam => {
            const auxExam = new Exam(infoExam);
            return new Appointment({ ...infoExam, exam: auxExam });
        });

    } catch (error) {
        console.log(`[requestExamsToday] -> `, error);
        return null;
    }

}

module.exports = requestExamsToday;