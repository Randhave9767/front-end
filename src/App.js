import React, { Fragment } from 'react';
import { Route, Routes } from "react-router-dom";
import Register from './components/Register/Register';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import Navbar_ from './components/Navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';



const App = () => {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar_/>}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Sidebar" element={<Sidebar />}></Route>
          {/* <Route path="/" element={<Register />}></Route> */}
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}
export default App;




// onClic={()=>{
//   console.log("hello world");
// }}