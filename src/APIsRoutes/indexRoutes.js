const connection = require("../Frameworks/database/mysql/connection");
const examRouter = require("./APIExamen/APIExamen.routes");

const indexRoutes = (app) => {

    app.get('/', (request, response) => {
        response.status(200).json({ mensaje: "Esta API funciona como back-end del proyecto SaludJusta" });
    });

    app.get('/check_mysql', (request, response) => {
        // response.status(200).json({ mensaje: "Esta API funciona como back-end del proyecto SaludJusta" });
        connection.connect(function (err) {
            if (err) {
                console.error('Database connection failed: ' + err.stack);
                response.status(200).json(err);
                return;
            }

            console.log('Connected to database.');
            response.status(200).json(err);
        });
    })

    app.use('/api_exam', examRouter);

}

module.exports = indexRoutes;