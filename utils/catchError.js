const logger=require("../logger")
function catchError(req,res,err)
{
    res.status(500).json({"error" :err.name,"message":err.message})
    logger.error(err.message)  
}
module.exports= catchError;