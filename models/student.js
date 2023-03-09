const mongoose =require('mongoose');
const schema = mongoose.Schema;

const student = new schema({
   firstName: String ,
   lastName: String,
   age: Number,
   email:String,
   college:String, 
   batch:Number,
   majors:[String],
   interests:[String],
   skiils:[String],
   hobbies:[String]

});
module.exports = mongoose.model('student', student)

