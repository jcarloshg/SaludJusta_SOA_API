
const indexRoutes = (app) => {


    app.get('/', (request, response) => {
        const mesajeBienvenido = {
            mensaje:
                "Esta API funciona como back-end del proyecto SaludJusta"
        }
        response.status(200).send(textWelcome);
    });

    console.log('app', app)

    // app.use('/apiCita')
}

module.exports = indexRoutes;