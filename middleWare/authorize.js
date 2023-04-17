const { findStudentByEmail, findStudentById } = require("../services/studentService");
const { verifyToken,getEmailFromToken,getRoleFromToken } = require("../utils/auth");
const { isEmptyObject } = require("../utils/general");

const auth=(access)=>{
    return async (req,res,next) =>{
        const token = req.headers.authorization.split(" ")[1];
        const role=getRoleFromToken(token);
        const email=getEmailFromToken(token);
        const student = await findStudentByEmail(email);
        const _student=await findStudentById(req.params.id);
        if(role==="Admin")
        { 
            next();
            return;
        }
         else{
            if(access==="Member"
            &&!isEmptyObject(_student)
            &&!isEmptyObject(student)
            &&_student.email===student.email){
                next();
                return;
            }
            else if(access==="Member"&&!req.params.id){
                next();
                return;
            }
            else{
                res.status(401).send("not authorized")
            }
         }
     }
 }
module.exports={auth}