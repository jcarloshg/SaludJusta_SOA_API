
const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");
const readExam = require("./readExam");

const recordResults = async (connection, data) => {

    const { idExam, results } = data;

    try {
        const query = `UPDATE Exam SET results=${results} WHERE idExam = ${idExam};`

        const resRecordResults = await conectionQuery(connection, query);

        const exam = await readExam(connection, { idExam: idExam });

        return exam;

    } catch (error) {
        console.log(`[recordResults] -> `, error);
        return null;
    }

    console.log(`[recordResults] is Ok`);

}

module.exports = recordResults;