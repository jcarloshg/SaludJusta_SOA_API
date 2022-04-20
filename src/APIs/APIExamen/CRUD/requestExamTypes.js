const ExamCatalogItem = require("../../../entities/ExamCatalogItem");


const requestExamTypes = async (connection) => {

    const typesExams = new Promise((resolve, reject) => connection.query(
        'SELECT * from CatalogoExamen;',
        (error, results, fields) => {
            error
                ? reject(error)
                : resolve(results)
        }
    ));

    try {

        const typesExamsResolve = await typesExams;

        const typeExams = typesExamsResolve.map(exam => new ExamCatalogItem(exam));

        return await typeExams;

    } catch (error) {
        return error;
    }

}

module.exports = requestExamTypes;