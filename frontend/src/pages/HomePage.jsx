import React from "react";
import { useNavigate } from "react-router-dom";
export default function Homepage(){
    const navigate= useNavigate();
    return(
        <div>
            <h1>Welcome to library server</h1>
            <button onClick={()=>navigate("/login")}>Login</button>
            <button onClick={()=>navigate("/register")}>Register</button>
            <button onClick={()=>navigate("/bookinfo")}>Books</button>
        </div>
    )
}