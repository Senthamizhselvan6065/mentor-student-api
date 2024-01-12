const mongoose = require('mongoose');
const expressAsyncHandler = require('express-async-handler');

const MongoDBConnection = expressAsyncHandler( async () => {
    await mongoose.connect(process.env.DB_URI).then(con => {
        console.log(`Mongodb connect to the POER:${con.connection.host}`);
    }).catch(error => {
        console.log(error);
    });
})

module.exports = MongoDBConnection;