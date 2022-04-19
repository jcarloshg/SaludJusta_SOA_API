
const connection = require("../../../../Frameworks/database/mysql/connection");

const gestionarCitas = {};

gestionarCitas.requestExamTypes = async () => {

    const plok = new Promise((resolve, reject) => connection.query(
        'SELECT * from CatalogoExamen;',
        (error, results, fields) => {
            error
                ? reject(error)
                : resolve(results)
        }
    ));


    try {
        const plokplok = await plok;
        return plokplok;
    } catch (error) {
        return error;
    }

}

module.exports = gestionarCitas;