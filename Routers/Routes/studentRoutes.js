const express = require('express')
const router = express.Router();
const student = require('../../models/student.js');
const studentController = require("../../controllers/studentController.js");
const {validation}=require("../../middleWare/validate.js")
const {studentSchema} =require("../../validatiions/studentValidation.js");
const { auth } = require('../../middleWare/authorize.js');
const { verifyToken } = require('../../utils/auth.js');

router.get('/test',verifyToken,auth("Admin"),studentController.getAllStudents)
router.post('/test',validation(studentSchema),studentController.createStudent)
router.get('/test/:id',verifyToken,auth("Member"),studentController.getOneStudent)
router.patch('/test/:id',verifyToken,auth("Member"),validation(studentSchema),studentController.updateStudent)
router.delete('/test/:id',verifyToken,auth("Member"),studentController.removeStudent)


module.exports=router;