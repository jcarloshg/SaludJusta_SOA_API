const express = require('express');
const bodyParser = require('body-parser');

const indexRoutes = require('./src/APIsRoutes/indexRoutes');

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));


indexRoutes(app);

const PORT = process.env.PORT || 8080;
const HOST = 'http://localhost';

app.listen(PORT, function () {
    console.log(`Salud-Justa API listening on ${HOST}:${PORT}`);
});

