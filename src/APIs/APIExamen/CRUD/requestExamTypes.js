
/**
 *
 * @param {} connection
 * @returns
 */
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
        return await typesExams;
    } catch (error) {
        return error;
    }

}

module.exports = requestExamTypes;