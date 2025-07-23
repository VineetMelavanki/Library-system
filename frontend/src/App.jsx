import Register from "./pages/Register";
import Login from "./pages/Login";
import Homepage from "./pages/HomePage";
import Books from "./pages/Books";
import {BrowserRouter,Routes,Route} from "react-router-dom";
 export default function App()
{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Homepage" element ={<Homepage/>}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/bookinfo" element={<Books/>}/>
    </Routes>
    </BrowserRouter>
  );
}