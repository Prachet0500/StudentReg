const studentInfo=require("../models/studentInfo");
const studentInfoService=require("../services/studentInfoService")
const{findStudents,
    findUpdateStudent,
    findStudentById,
    saveStudent,
    deleteStudent} =studentInfoService;
async function getAllStudents(req,res){
    const students = await findStudents(req.query).catch(
        err=>{res.status(500).send(err)}
    )
    res.status(200).json({students})
}
async function getOneStudent(req,res){
    const student=await findStudentById(req.params.id).catch(
        err=>{res.status(500).send(err.message)}
    )
    res.status(200).json({student})

}
async function createStudent(req,res){
    const student =await saveStudent(req.body).catch(
        err=>{if(err&&err!=null)res.status(500).send(err)}
    ) 
    res.status(200).json({message:"new student document created",student:student})      
}

async function updateStudent(req,res){
    const student=await findUpdateStudent(req.params.id,req.body).catch(
        err=>{res.status(500).send(err)}
    );
    res.status(200).json({message:"student document updated",student:student})

           
}
async function removeStudent(req,res){
    await deleteStudent(req.params.id).catch(
        err=>{res.status(500).send(err)});
    res.status(200).json({message:"student document deleted",deletedDocID:req.params.id})

}

module.exports={getAllStudents,createStudent,getOneStudent,updateStudent,removeStudent}