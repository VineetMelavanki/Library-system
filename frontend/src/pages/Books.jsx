import React,{useState,useEffect} from "react";
import axios from "axios";
 export default function Books()
 {
    const[books,setbook]=useState([]);
    const[error,seterror]=useState("");
    useEffect(()=>{
      axios.get("http://localhost:8005/api/bookinfo")
      .then((res)=>{
        console.log("Books form API :",res.data);
        setbook(res.data)})
      .catch(()=>seterror("could not fetch books please try again later"));
    },[]);
    console.log("Book is render :",books);
    if(error)
    {
        return <div>{error}</div>
    }
     if (!Array.isArray(books)) return <div>Books is not an array!</div>;
    if (!books.length) 
        {
            return <div>Loading...</div>;

        }
    return(
        <div>
            <table style={{width: "90%",margin: "2rem auto", borderCollapse:"collapse"}}>
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>publishedDate</th>
                    <th>CopiesAvailable</th>
                    </tr>
                </thead>
                <tbody>
                   {books.map((book)=>(
                    <tr key={book._id || book.title}>
                        <td>{book.Title}</td>
                        <td>{book.Author}</td>
                        <td>{book.publishedDate}</td>
                        <td>{book.CopiesAvailable}</td>
                    </tr>
                   ))}
                </tbody>
            </table>
        </div>
    );
 }