const express = require('express')
const router = express.Router();
const collegeController = require("../../controllers/collegeController.js");
const {validation}=require("../../middleWare/validate.js")
const {collegeSchema} =require("../../validatiions/collegeValidation.js")
const {verifyToken}=require("../../utils/auth.js");
const {auth}=require("../../middleWare/authorize.js")
router.get('/test',verifyToken,auth("Members"),collegeController.getAllColleges)
router.post('/test',verifyToken,auth("Admin"),validation(collegeSchema),collegeController.createCollege)
// router.get('/test/:id',collegeController.getOneStudent)
router.patch('/test/:id',verifyToken,auth("Admin"),validation(collegeSchema),collegeController.updateCollege)
// router.delete('/test/:id',collegeController.removeStudent)


module.exports=router;