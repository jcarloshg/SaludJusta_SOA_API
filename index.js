const express = require('express');
const app = express();


const cliente = require('./Cliente');

app.get('/', (request, response) => {

    const cliete = cliente({ name: "JoseCarlos", numberPhone: 2212272775 });

    response.status(200).json(cliete);
});

const PORT = process.env.PORT || 8080;
const HOST = 'http://localhost';

app.listen(PORT, function () {
    console.log(`Salud-Justa API listening on ${HOST}:${PORT}`);
});