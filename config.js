const mongoose=require('mongoose');
const uri="mongodb+srv://Prachet:pass@cluster0.5csgf9v.mongodb.net/?retryWrites=true&w=majority"
try {
  // Connect to the MongoDB cluster
   console.log('trying') ;
   mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );

} catch (e) {
  console.log("could not connect");
}
