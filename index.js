const { response } = require('express');
const { request } = require('express');
const bodyParser = require('body-parser')
const express = require('express');
const app= express();
const router=require('./Routers/studentInfoRoutes.js');
app.get('/',(req, res)=>{res.send("app running,get request succesful")});
// app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.listen(5000,console.log('app is now running on localhost:5000'));
const mongoose=require('mongoose');
const uri="mongodb+srv://Prachet:pass@cluster0.5csgf9v.mongodb.net/studentReg"
  // Connect to the MongoDB cluster
   mongoose.connect(uri);


const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));
app.use('/student',router);
module.exports= mongoose;
