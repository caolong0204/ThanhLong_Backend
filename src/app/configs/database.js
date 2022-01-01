const mongoose = require('mongoose');
async function connect(){
    //hosting cloud
    // username:"thanhlong",
    // password:"thanhlong123",
    // databaseName:"myFirstDatabase"
    //mongodb+srv://${username}:${password}@cluster0.m0rz2.mongodb.net/${databaseName}?retryWrites=true&w=majority`

    //hosting local
    //mongodb://127.0.0.1:27017/
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/LearnMongo');
        console.log("Connect DB Successfully")
    }catch(err){
        console.log("Connect DB Fail")
    }

}

module.exports={
    connect
}