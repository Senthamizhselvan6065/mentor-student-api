const express = require('express');
const server = express();

const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
server.use('/', app);

const MongoDBConnection = require('./database/connection');
MongoDBConnection();

server.listen(process.env.PORT, () => {
    console.log(`server start with localhost:${process.env.PORT} and ${process.env.NODE_ENV}`);
})