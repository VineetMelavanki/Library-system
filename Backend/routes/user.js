const express= require("express");
const Userrouter=express.Router();
const{Register,Login,GetUsers,GetUserbyid}=require("../controllers/user");
Userrouter.post("/login",Login);
Userrouter.post("/register",Register);
Userrouter.get("/",GetUsers);
Userrouter.get("/:id",GetUserbyid);
module.exports=Userrouter;

