const mongoose =require('mongoose');
const schema = mongoose.Schema;

const college = new schema({
   name: {type:String,required:true} ,
   location: {type:String,required:true} ,
   state: {type:Number,required:true},
   since:Number,
   majors:{type:[String],required:true},
   facilities:[String],
   capacity:Number,


});
module.exports = mongoose.model('college', college)

