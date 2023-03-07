
const yup=require("yup")
const studentSchema=yup.object().shape({
    firstName:yup.string().required(),
    lastName:yup.string().required(),
    age:yup.number().min(16).max(45).required(),
    email:yup.string().email().required()
})
module.exports={studentSchema}