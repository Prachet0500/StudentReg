const { type } = require('@hapi/joi/lib/extend');
const mongoose =require('mongoose');
const schema = mongoose.Schema;

const student = new schema({
   firstName: {type:String,required:true} ,
   lastName: {type:String,required:true},
   age: {type:Number,required:true},
   email:{type:String,required:true},
   college:{type:String,required:true}, 
   batch:Number,
   majors:{type:[String],required:true},
   interests:[String],
   skiils:[String],
   hobbies:[String],
   key:{type:String,required:true},
   role:{type:String,required:true}

});
module.exports = mongoose.model('student', student)

