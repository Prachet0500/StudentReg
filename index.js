const { response } = require('express');
const { request } = require('express');
const logger=require("./logger")
const bodyParser = require('body-parser')
const express = require('express');
const app= express();

const router=require('./Routers/routerIndex.js');
app.get('/',(req, res)=>{res.send("app running,get request succesful")});
// app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.listen(5000,logger.info(' App is now running on localhost:5000'));
const mongoose=require('mongoose');
const { authentication } = require('./Routers/authentication');
const uri="mongodb+srv://Prachet:pass@cluster0.5csgf9v.mongodb.net/studentReg"
  // Connect to the MongoDB cluster
   mongoose.connect(uri);


const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => logger.error(` Connection error ${err}`));
dbConnection.once("open", () => logger.info(" Connected to DB!"));
app.use('/',router);
app.use('/',authentication)
module.exports= mongoose;
