const mongoose =require('mongoose');
const schema = mongoose.Schema;

const college = new schema({
   name: String ,
   location: String,
   state: Number,
   since:Number,
   majors:[String],
   facilities:[String],
   capacity:Number,


});
module.exports = mongoose.model('college', college)

