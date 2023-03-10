const express = require('express')
const router = express.Router();
const collegeController = require("../../controllers/collegeController.js");
const {validation}=require("../../middleWare/validationMiddleWare.js")
const {collegeSchema} =require("../../validatiions/collegeValidation.js")

router.get('/test',collegeController.getAllColleges)
router.post('/test',validation(collegeSchema),collegeController.createCollege)
// router.get('/test/:id',collegeController.getOneStudent)
router.patch('/test/:id',collegeController.updateCollege)
// router.delete('/test/:id',collegeController.removeStudent)


module.exports=router;