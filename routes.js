const express = require('express')
const router = express.Router()
const studentInfo = require('./models/studentInfo.ts');
router.get('/test',async (req,res)=>{
    const students = await studentInfo.find()
    res.json({students})
})
router.post('/test',async (req,res)=>{
    const student = new studentInfo(req.body);
    console.log(req.body, "req")
    await student.save(function handleError(err) {
        if (err) console.log(err);
        // saved!
        else
            {
            res.status(200).send("new document created");}
      });
      
})

module.exports=router;