
const utilsRouter = require("../utils/utils.routes");
const apiAccountRuter = require("./APICuenta/APICuenta.routes");
const apiExamRouter = require("./APIExamen/APIExamen.routes");



const index_routes = (app) => {

    app.use('/utils', utilsRouter);

    app.use('/api_exam', apiExamRouter);

    app.use('/api_account', apiAccountRuter);
}

module.exports = index_routes;