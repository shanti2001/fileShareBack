require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = ()=>{
    //Database connection

    mongoose.connect(process.env.MONGO_CONNECTION_URL)
    .then(()=>{
        console.log("DataBase Connected");
    }).catch((err)=>{
        console.log("Not Connected");
    })
}

module.exports = connectDB;