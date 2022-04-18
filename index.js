const express = require('express');
const app = express();

app.get('/', (request, response) => {
    const mesajeBienvenido = {
        mensaje:
            "Esta API funciona como back-end del proyecto SaludJusta"
    }

    response.status(200).json(mesajeBienvenido);
});




const PORT = process.env.PORT || 8080;
const HOST = 'http://localhost';

app.listen(PORT, function () {
    console.log(`Salud-Justa API listening on ${HOST}:${PORT}`);
});