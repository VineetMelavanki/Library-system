import React,{useState} from "react";
import axios from "axios";
export default function Login()
{
const[email,Setemail]=useState("");
const[password,Setpassword]=useState("");
const[error,Seterror]=useState("");
const[success,setsuccess]=useState("");
const Handlelogin=async (e)=>{
    e.preventDefault();
    Seterror("");
    setsuccess("");
    try{
        const res=await axios.post("http://localhost:8005/api/users/login",{
            email,
            password,
        });
       setsuccess(res.data.msg || "login successfull");
       alert("Login successfull");
       Setemail("");
       Setpassword("");
    }
        catch(err)
        {
          // Error handling for backend and network errors
      const msg =
        err.response?.data?.msg || "Login failed. Please try again.";
      Seterror(msg);
      // Don't clear email/password, so user can try again
        }
};
return (
    <div>
        <h1>Login</h1>
        <form onSubmit={Handlelogin}>
        <input 
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>
            Setemail(e.target.value)
        }/><br/>
        <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e)=>
            Setpassword(e.target.value)
        }/><br/>
        <button type="submit">Login</button>
        </form>
        
    </div>
);
}