const Exam = require("../../../entities/Exam");

const createExam = async (connection, data) => {

    const { FK_ExamCatalog } = data;

    const query = `INSERT INTO Exam (FK_ExamCatalog) values (${FK_ExamCatalog});`;

    const createExamQuery = new Promise((resolve, reject) => connection.query(
        query,
        (error, results, fields) => {
            error
                ? reject(error)
                : resolve(results)
        }
    ));

    try {
        const exam = await createExamQuery;
        return exam
            ? new Exam({ idExam: exam.insertId, FK_ExamCatalog: FK_ExamCatalog })
            : null;
    } catch (error) {
        console.log(`[error] -> `, error);
        return error;
    }

}

module.exports = createExam;