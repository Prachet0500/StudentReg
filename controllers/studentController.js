const studentService=require("../services/studentService")
const collegeService=require("../services/collegeService")
const {catchError}=require("../utils/catchError.js");
const { isEmptyObject } = require("../utils/general");
const { encryptPassword } = require("../utils/auth");
const{findStudents,
    findUpdateStudent,
    findStudentById,
    saveStudent,
    deleteStudent,findStudentByEmail} =studentService;
    const {findCollegeByName,validateMajors}=collegeService;
async function getAllStudents(req,res){
    const students = await findStudents(req.query).catch(err=>
        {catchError(req,res,err)}
    ) 
    res.status(200).json({students})
}
async function getOneStudent(req,res){
    const student=await findStudentById(req.params.id).catch(err=>
        {catchError(req,res,err)} 
    )
    res.status(200).json({student})
}
async function createStudent(req,res){
    const college=await findCollegeByName(req.body.college).catch(err=>{catchError(req,res,err)});
    if(!college.length) return res.status(400).send("college doesn't exist")

    const majorsValid=await validateMajors(req.body.majors,college[0].name).catch(err=>{catchError(req,res,err)});
    if(majorsValid===false) return res.status(400).send("your college doesn't have the majors you enetered")

    const email=await findStudentByEmail(req.body.email).catch(err=>{catchError(req,res,err)});
    if(!isEmptyObject(email)) return res.status(400).send("email must be unique")
    const student =await saveStudent(req.body).catch(err=>
    {catchError(req,res,err)}) 
    res.status(200).json({message:"new student document created",student:student})          
}

async function updateStudent(req,res){
    const student=await findUpdateStudent(req.params.id,req.body).catch(err=>
        {catchError(req,res,err)}
    ) ;
    res.status(200).json({message:"student document updated",student:student})           
}
async function removeStudent(req,res){
    await deleteStudent(req.params.id).catch(err=>
        {catchError(req,res,err)}
    ) ;
    res.status(200).json({message:"student document deleted",deletedDocID:req.params.id})
}

module.exports={getAllStudents,createStudent,getOneStudent,updateStudent,removeStudent}