const User=require("../models/user");
const bcrypt =require("bcrypt");
const saltRounds=10;
async function Register(req,res)
{
    const body =req.body;
    if(!body || !body.email || !body.name || !body.password || !body.studentId)
    {
        return res.status(400).json({msg :"All fields are required "});
    } 
    const exisitinguser= await User.findOne({email: body.email})
    if(exisitinguser)
    {
        return res.status(400).json({msg : "Email already exists"})
    }
    const hashpassword = await bcrypt.hash(body.password,saltRounds);
    const result =await User.create({
        name : body.name,
        email : body.email,
        password : hashpassword,
        studentId : body.studentId,
    });
    
    console.log("Result ",result);
    return res.status(200).json({status :"successfully Registered"});
};
async function Login(req,res)
{
    const body=req.body;
    //validate
    if(!body || !body.email || !body.password)
    {
        return res.status(400).json({msg :"All fields are required"});
    }
    //find user
    const user =await User.findOne({email : body.email});
    if(!user)
    {
        return res.status(401).json({msg : "User not found"});
    }
     //Security
     const isValidpassword= await bcrypt.compare(body.password,user.password);
     if(!isValidpassword)
     {
        return res.status(400).json({msg : "Not a valid password"});
     }
    return res.status(200).json({msg :"Successfull login"});
}
async function GetUsers(req,res)
{
    const allUsers=  await User.find({});
    return res.status(200).json(allUsers);
}
async function GetUserbyid(req,res)
{
    const Userr= await User.findById(req.params.id);
    if(!User)
    {
        return res.status(400).json({msg : "User not found"});
    }
    return res.status(200).json(Userr);
}

module.exports={Register,Login,GetUsers,GetUserbyid};