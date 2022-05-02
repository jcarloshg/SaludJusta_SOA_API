
const Exam = require("../../../entities/Exam");
const ExamCatalogItem = require("../../../entities/ExamCatalogItem");
const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");

const readExam = async (connection, data) => {

    try {

        const { idExam } = data;

        const query =
            `SELECT * FROM Exam INNER JOIN ExamCatalog ON Exam.FK_ExamCatalog = ExamCatalog.idExamCatalog WHERE idExam= ${idExam};`

        const resReadExam = await conectionQuery(connection, query);

        return resReadExam.length > 0
            ? new Exam({ ...resReadExam[0], examCatalogItem: new ExamCatalogItem({ ...resReadExam[0] }) })
            : [];

    } catch (error) {
        console.log(error);
        return null;
    }

}

module.exports = readExam;