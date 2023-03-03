const mongoose =require('mongoose');
const schema = mongoose.Schema;

const studentInfo = new schema({
   firstName: String,
   lastName: String,
   age: Number,
   email:String,
   subjects:[String],
   instrument: String,


});
module.exports = mongoose.model('studentInfo', studentInfo)

