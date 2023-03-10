const express = require('express')
const router = express.Router();
const studentRoutes=require("./Routes/studentRoutes");
const collegeRoutes=require("./Routes/collegeRoutes");
router.use('/student',studentRoutes);
router.use('/college',collegeRoutes);
module.exports=router;