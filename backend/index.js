const app = require('express')();
const db = require('./config/db');
const consign = require('consign');

consign()
    .then('./config/middlewares.js')
    .into(app);

app.db = db;

app.get('/', (req, res) => {
    res.status(200).send('Meu backend');
})

app.listen(3000);