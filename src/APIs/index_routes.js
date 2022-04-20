
const utilsRouter = require("../utils/utils.routes");
const apiExamRouter = require("./APIExamen/APIExamen.routes");

const index_routes = (app) => {

    app.use('/utils', utilsRouter);

    app.use('/api_exam', apiExamRouter);
}

module.exports = index_routes;