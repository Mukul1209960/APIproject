import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./Pages/Register";
import Movies from "./Pages/Movies";
import Browse from "./Pages/Browse";
import Display from "./Pages/Display";

const App = ()=>{
 return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/display" element={<Display />} />
      <Route path="browse" element={<Browse />} />
    </Routes>
      
      
      
    </BrowserRouter>
  );
}

export default App
