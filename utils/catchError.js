 logger=require("../logger")
function catchError(req,res,err)
{
    res.status(500).json({"error" :err.name,"message":err.message})
    logger.error(err.message)  
}

const handleValidationError=(req,res,message)=>{
    res.status(400).send(message)
 
    return false;
}
module.exports= {catchError,handleValidationError};