const studentInfo=require("../models/studentInfo");

async function findStudents(query)
{   const where={};
    if(query.firstName) where.firstName=query.firstName;
    if(query.lastName) where.lastName=query.lastName;
    if(query.email) where.email=query.email;
    if(query.subjects) where.subjects={$elemMatch: {$in:query.subjects}}
    return await studentInfo.find(where) ;  
    
}

async function findStudentById(id)
{
    return await studentInfo.find({_id:id});
}

async function saveStudent(body)
{    const student = new studentInfo(body);
     return await student.save();
  
    }

async function findUpdateStudent(id,body)
{   await studentInfo.findOneAndUpdate({_id: id},body);
    return await studentInfo.findOne({_id:id});
    }

async function deleteStudent(id,body)
{
     await studentInfo.deleteOne({ _id: id })
}

module.exports={findStudents,findStudentById,saveStudent,findUpdateStudent,deleteStudent}