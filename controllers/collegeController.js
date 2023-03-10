const collegeService=require("../services/collegeService")
const catchError=require("../utils/catchError.js")
const{findColleges,
    findUpdateCollege,
    saveCollege,
    findCollegeByName
    } =collegeService;
async function getAllColleges(req,res){
    const colleges = await findColleges(req.query).catch(err=>
        {catchError(req,res,err)}
    ) 
    res.status(200).json({colleges})
}
// async function getOneCollege(req,res){
//     const college=await findCollegeByName(req.params.name).catch(err=>
//         {catchError(req,res,err)} 
//     )
//     res.status(200).json({college})
// }
async function createCollege(req,res){
    let valid=true;
    const College=await findCollegeByName(req.body.name).catch(err=>
        {catchError(req,res,err)} 
    );
    if(College.length) {
        valid=false;
        res.status(400).send("College already exists")}
    if(valid==true)
    {   const college =await saveCollege(req.body).catch(err=>
            {catchError(req,res,err)}
        ) 
        res.status(200).json({message:"new College document created",college:college})  }    
}

async function updateCollege(req,res){
    const college=await findUpdateCollege(req.params.id,req.body).catch(err=>
        {catchError(req,res,err)}
    ) ;
    res.status(200).json({message:"College document updated",college:college})           
}
// async function removeCollege(req,res){
//     await deleteCollege(req.params.id).catch(err=>
//         {catchError(req,res,err)}
//     ) ;
//     res.status(200).json({message:"College document deleted",deletedDocID:req.params.id})
// }

module.exports={getAllColleges,createCollege,updateCollege}