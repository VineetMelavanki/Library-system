const mongoose=require("mongoose");
const express =require("express");
const cors=require("cors");
const app=express();
const http=require("http");
const connectMongodb = require("./connection/user");
const UserRouter=require("./routes/user");
const Booksstore=require("./Mockdata/Books.json");
const Userinfo=require("./Mockdata/User.json");
const User=require("./models/user");
const Book=require("./models/book");
const port =8005;
app.use(express.json());
app.use(cors());
const Bookrouter=require("./routes/book");
app.use(express.urlencoded({extended : false}));
app.use((req,res,next)=>
{
   console.log("Welcome to middleware 1");
   next();
});
app.use("/api/bookinfo",Bookrouter);
app.use("/api/users",UserRouter);
connectMongodb("mongodb://127.0.0.1:27017/")
.then(async () =>{
    console.log("MongoDb connected");
    const Usercount= await User.countDocuments();
    const Bookcount= await Book.countDocuments();
    if(Usercount==0)
    {
        await User.insertMany(Userinfo);
        console.log("User data inserted successfully");
    }
    if(Bookcount ==0)
    {
        await Book.insertMany(Booksstore);
        console.log("Book data inserted successfully");
    }

    const Myserver=http.createServer(app);
    Myserver.listen(port,()=>console.log(`Server started at ${port}`));
})
.catch((err)=>console.log("Error ",err));
