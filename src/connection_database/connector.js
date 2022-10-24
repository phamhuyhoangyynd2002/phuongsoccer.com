const mongoose = require('mongoose');

async function connect(){
  try {
    await mongoose.connect('mongodb+srv://phuongsoccer:88phuong88@cluster0.hnjzdpq.mongodb.net/phuongsoccer', {
       useNewUrlParser: true, 
       useUnifiedTopology: true 
      });
    console.log("Connected phuongsoccerDB");
  }
  catch (error){
    console.log("Connect phuongsoccerDB error:"+ error);
  }
}

module.exports ={connect};