const express = require('express');
const index_routes = require('./src/APIs/index_routes');
const cors = require('cors')


const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


index_routes(app);

const PORT = process.env.PORT || 8080;
const HOST = 'http://localhost';

app.listen(PORT, function () {
    console.log(`Salud-Justa API listening on ${HOST}:${PORT}`);
});

