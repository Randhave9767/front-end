import React, { Fragment } from 'react';
import { Route, Routes } from "react-router-dom";
import Register from './components/Register';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import  Login  from './components/Login';
const App=()=>{
 
  return (
  <>
   
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
    </Routes>
    </BrowserRouter>
   
  {/* <div className='main_div'>
  <div className='card_div'>
  <h1>{Count}</h1>
  <div className='btn_div'>
  <Tooltip title="Add">
  <Button onClick={Inrem} className="btn_green"><AddIcon/>
  </Button>
  </Tooltip>
  <Tooltip title="Delete">
  <Button onClick={Derem} className="btn_red"><RemoveIcon/>
  </Button>
  </Tooltip>
  </div>
  </div>
  </div> */}
  </>
  );
}
export default App;