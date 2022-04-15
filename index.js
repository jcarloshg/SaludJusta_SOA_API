const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('<h1>Hola mi pana</h1>')
});

const PORT = process.env.PORT || 8080;
const HOST = 'http://localhost';

app.listen(PORT, function () {
    console.log(`Salud-Justa API listening on ${HOST}:${PORT}`);
});