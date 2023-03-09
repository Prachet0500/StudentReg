const college=require("../models/college");

async function findcolleges(query)
{   const where={};
    if(query.name) where.name=query.name;
    if(query.location) where.location=query.location;
    if(query.state) where.state=query.state;
    return await college.find(where) ;  
    
}

async function findcollegeByName(name)
{
    return await college.find({name:name});
}

async function savecollege(body)
{    const college = new college(body);
     return await college.save();
  
    }

async function findUpdatecollege(id,body)
{   await college.findOneAndUpdate({_id: id},body);
    return await college.findOne({_id:id});
    }

async function deletecollege(id,body)
{
     await college.deleteOne({ _id: id })
}

async function validateMajors(majors,college){
    const College=college.find({majors: {$all:majors}})
    if(College===null) return false
    return true 
}

module.exports={findcolleges,findcollegeByName,savecollege,findUpdatecollege,deletecollege}