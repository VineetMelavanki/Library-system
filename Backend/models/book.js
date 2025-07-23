const mongoose=require("mongoose");
const BookSchema=mongoose.Schema({
      Title:
      {
        type: String,
        required : true,
      },
      Author:
      {
        type: String,
        required : true,
      },
      publishedDate:
      {
        type : Number,
        require: true,
      },
      CopiesAvailable :
      {
        type : Number ,
        required : true,
      },
});
const Book =mongoose.model("Bookmodel",BookSchema);
module.exports=Book;