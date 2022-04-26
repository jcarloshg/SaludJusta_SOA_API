
//============================================================
// his name -> getInfoExamenPorID()
//
// data ->
//      [id]  -> id from exam to get his info
//
// return   -> return info from exmam
//============================================================

const Appointment = require("../../../entities/Appointment");
const Exam = require("../../../entities/Exam");
const User = require("../../../entities/User");
const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");

const requestoInfoExamByID = async (connection, data) => {

    const { idExam } = data;

    console.log(`[idExam] -> `, idExam);

    try {

        const query =
            "SELECT * FROM User " +
            "INNER JOIN Appointment ON Appointment.FK_UserClient = User.idUser " +
            "INNER JOIN Exam ON Exam.idExam = Appointment.FK_Exam " +
            `WHERE idExam = '${idExam}' ` +
            "ORDER BY time ASC;";

        const infoExam = await conectionQuery(connection, query);

        const exam = new Exam(infoExam[0]);
        const appointment = new Appointment({
            ...infoExam[0],
            exam: exam
        });
        const client = new User({
            ...infoExam[0],
            appointments: [appointment]
        });

        return client;

    } catch (error) {
        console.log(`[requestExamsToday] -> `, error);
        return null;
    }

    return await "requestoInfoExamByID is Ok";

}


module.exports = requestoInfoExamByID;