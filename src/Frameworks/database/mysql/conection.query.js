
// * ============================================================
// *
// * DOCUMENTATION -> https://github.com/mysqljs/mysql#introduction
// *
// * ============================================================

const conectionQuery = (connection, query) => {
    return new Promise((resolve, reject) =>
        connection.query(
            query, (error, results, fields) => {
                error
                    ? reject(error)
                    : resolve(results)
            }
        )
    );
}

module.exports = conectionQuery;