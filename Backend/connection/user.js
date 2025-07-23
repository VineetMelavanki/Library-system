const mongoose=require("mongoose");
async function connectMongodb(Url)
{
    mongoose.connect("mongodb://127.0.0.1:27017/");
}
module.exports=connectMongodb;
