const student=require("../models/student");
const { encryptPassword } = require("../utils/auth");
async function findStudents(query)
{   const where={};
    if(query.firstName) where.firstName=query.firstName;
    if(query.lastName) where.lastName=query.lastName;
    if(query.email) where.email=query.email;
    if(query.college) where.college=query.college;
    if(query.majors) where.majors={$elemMatch: {$in:query.majors}}
    return await student.find(where) ;  
    
}

async function findStudentById(id)
{
    return await student.find({_id:id});
}

async function saveStudent(body)
{
   Body={...body} ;
   console.log("Body",Body)
   Body.key=await encryptPassword(body.key) 
   return await student.create(Body);
    }

async function findUpdateStudent(id,body)
{   await student.findOneAndUpdate({_id: id},body);
    return await student.findOne({_id:id});
    }

async function deleteStudent(id,body)
{
     await student.deleteOne({ _id: id })
}

async function findStudentByEmail(email){
    return await student.findOne({email:email});
}

module.exports={findStudents,findStudentById,saveStudent,findUpdateStudent,deleteStudent,findStudentByEmail}