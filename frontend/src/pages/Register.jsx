import React,{useState} from "react";
import axios from "axios";
 export default function Register(){
 const[name,setName]=useState("");
 const[email,setEmail]=useState("");
 const[password,setPassword]=useState("");
 const[studentId,setStudentId]=useState("");
  const RegisterUser = async (e)=>{
    e.preventDefault();
    try{
        const result = await axios.post("http://localhost:8005/api/users/register",{
            name,
            email,
            password,
            studentId,
        });
        console.log(result.data);
        alert("Registered Successfully");
        setName("");
        setEmail("");
        setPassword("");
        setStudentId("");
    }
    catch (err) {
   if (err.response?.data?.msg) {
      alert("Registration failed: " + err.response.data.msg);
   } else {
      alert("Registration failed: " + err.message);
   }
}
  }

  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={RegisterUser}>
            <input 
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=>
            setName(e.target.value)}/><br/>
        <input 
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>
        setEmail(e.target.value)}/><br/>
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>
            setPassword(e.target.value)
        }/><br/>
        <input
        type="text"
        placeholder="Studentid"
        value={studentId}
        onChange={(e)=>
            setStudentId(e.target.value)
        }/><br/>
        <button type="submit">Register</button>
        </form>
    </div>
  );
 }
