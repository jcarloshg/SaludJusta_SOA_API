const express = require('express');
const indexRoutes = require('./src/APIsRoutes/indexRoutes');


const app = express();

indexRoutes(app);


const PORT = process.env.PORT || 8080;
const HOST = 'http://localhost';

app.listen(PORT, function () {
    console.log(`Salud-Justa API listening on ${HOST}:${PORT}`);
});