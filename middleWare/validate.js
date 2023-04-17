 const validation=(schema)=>{
   return async (req,res,next) =>{
        const body=req.body;
        await schema.validate(body).catch(err=>{res.status(400).json({"error":err.name,message:err.message})})
        next();
        return;
    }
}
module.exports={validation}