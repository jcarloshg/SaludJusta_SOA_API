const ExamCatalogItem = require("../../../entities/ExamCatalogItem");
const conectionQuery = require("../../../Frameworks/database/mysql/conection.query");


const requestExamTypes = async (connection) => {

    try {

        const query = 'SELECT * from ExamCatalog;'

        const typesExamsResolve = await conectionQuery(connection, query);

        return typesExamsResolve.map(exam => new ExamCatalogItem(exam));

    } catch (error) {
        return error;
    }

}

module.exports = requestExamTypes;