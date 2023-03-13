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
   hobbies:[String]

});
module.exports = mongoose.model('student', student)

