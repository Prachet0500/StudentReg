'use-strict'
const {rejectNumebrs} =require("../utils/regex")
const yup=require("yup")
const collegeSchema=yup.object().shape({
    name:yup.string().matches(rejectNumebrs).required(),
    location:yup.string().matches(rejectNumebrs).required(),
    state:yup.number().min(0).max(35).required(),
    majors:yup.array().of(yup.string().matches(rejectNumebrs)).required()
})
module.exports={collegeSchema}