const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mentorRouter = require('./controllers/mentor.controller');
const studentRouter = require('./controllers/student.controller');
app.use('/api/v1', mentorRouter);
app.use('/api/v1', studentRouter);

/* error middleware */
const ErrorMiddleware = require('./middlewares/ErrorMiddleware');
app.use(ErrorMiddleware)


module.exports = app;