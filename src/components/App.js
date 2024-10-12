
import React from "react";
import './../styles/App.css';
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import Home from "./Home";
import About from "./About";

import Links from "./Links"
const App = () => {
  return (
    <BrowserRouter>
    <Links></Links>
    <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
