'use-strict'
const {rejectNumebrs} =require("../utils/regex")
const yup=require("yup")
require("yup-password")(yup)
const studentSchema=yup.object().shape({
    firstName:yup.string().matches(rejectNumebrs).required(),
    lastName:yup.string().matches(rejectNumebrs).required(),
    age:yup.number().min(16).max(45).required(),
    email:yup.string().email().required(),
    college:yup.string().matches(rejectNumebrs).required(),
    majors:yup.array().of(yup.string().matches(rejectNumebrs)).max(2).required(),
    key:yup.string().password().required()
})
module.exports={studentSchema}