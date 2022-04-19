const connection = require("../Frameworks/database/mysql/connection");
const utilsRouter = require("../utils/utils.routes");
const examRouter = require("./APIExamen/APIExamen.routes");

const indexRoutes = (app) => {

    app.use('/utils', utilsRouter);

    app.use('/api_exam', examRouter);
}

module.exports = indexRoutes;