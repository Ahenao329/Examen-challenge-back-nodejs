const express = require('express');
require('dotenv').config();
const cors = require('cors')

const { dbConnection } = require('./database/config');

const app = express();

app.use(cors());

app.use( express.json() );

dbConnection();

//Rutas
app.use('/api/products', require('./routes/products'));



app.listen(3000, () => {
    console.log('Servidor corriendo por el puerto' + process.env.PORT);
});