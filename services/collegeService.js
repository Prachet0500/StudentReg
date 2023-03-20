const college=require("../models/college");

async function findColleges(query)
{   const where={};
    if(query.name) where.name=query.name;
    if(query.location) where.location=query.location;
    if(query.state) where.state=query.state;
    return await college.find(where) ;  
    
}

async function findCollegeByName(name)
{
    return await college.find({name:name});
}

async function saveCollege(body)
{    return await college.create(body);
  
    }

async function findUpdateCollege(id,body)
{   await college.findOneAndUpdate({_id: id},body);
    return await college.findOne({_id:id});
    }

async function deleteCollege(id,body)
{
     await college.deleteOne({ _id: id })
}

async function validateMajors(major,College){
    const collegeValid=await college.find({majors: {$all:major}})
    collegeValid.filter(element=>element.name===College)
    if(!collegeValid.length) return false
    return true 
}

module.exports={findColleges,findCollegeByName,saveCollege,findUpdateCollege,deleteCollege,validateMajors}