
const indexRoutes = (app) => {

    app.get('/', (request, response) => {
        response.status(200).json({ mensaje: "Esta API funciona como back-end del proyecto SaludJusta" });
    });

    // app.use('/apiCita')
}

module.exports = indexRoutes;