const express = require('express')
const router = express.Router();
const student = require('../../models/student.js');
const studentController = require("../../controllers/studentController.js");
const {validation}=require("../../middleWare/validationMiddleWare.js")
const {studentSchema} =require("../../validatiions/studentValidation.js")

router.get('/test',studentController.getAllStudents)
router.post('/test',validation(studentSchema),studentController.createStudent)
router.get('/test/:id',studentController.getOneStudent)
router.patch('/test/:id',studentController.updateStudent)
router.delete('/test/:id',studentController.removeStudent)


module.exports=router;