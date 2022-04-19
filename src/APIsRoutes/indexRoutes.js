const examRouter = require("./APIExamen/APIExamen.routes");


const indexRoutes = (app) => {

    app.get('/', (request, response) => {
        response.status(200).json({ mensaje: "Esta API funciona como back-end del proyecto SaludJusta" });
    });

    app.use('/api_exam', examRouter);

}

module.exports = indexRoutes;