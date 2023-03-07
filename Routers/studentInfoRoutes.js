const express = require('express')
const router = express.Router();
const studentInfo = require('../models/studentInfo.js');
const studentInfoController = require("../controllers/studentInfoController.js");
const {validation}=require("../middleWare/validationMiddleWare.js")
const {studentSchema} =require("../validatiions/studentInfoValidation.js")

router.get('/test',studentInfoController.getAllStudents)
router.post('/test',validation(studentSchema),studentInfoController.createStudent)
router.get('/test/:id',studentInfoController.getOneStudent)
router.patch('/test/:id',studentInfoController.updateStudent)
router.delete('/test/:id',studentInfoController.removeStudent)


module.exports=router;