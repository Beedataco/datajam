require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
//routes
const api = require('./api');

const port = process.env.PORT || 4000;
const app = express();

//settings
app.set('port', port);

//middlewares
app.use(morgan('dev'));

// config express
app.use(express.json());
app.set('trust proxy', 1); // rate limit proxy
app.use(express.urlencoded({ extended: true }));

//use api routes
app.use(api);


//using cors
app.use(cors());


//start server

const server = app.listen(port, async () => {

    console.log('Welcome to GeoBee 🚀');
  
});
  
module.exports = server;