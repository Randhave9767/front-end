import React from "react";
import TextField from '@mui/material/TextField';
import Checkbox  from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import pic from "../Images/Login.png";
import "../Login/Login.css";
import Link from "@mui/material/Link";

export default function Login(){
    return(
    <>   
    <div className="main">
        <div className="login_div">
            <h2>Hi, Welcome back!👋</h2>
            <TextField id="outlined-basic" label="Email" variant="outlined"/><br/>
            <TextField id="outlined-basic" label="Password" variant="outlined" /><br/>
            <div className="remember">
            <FormControlLabel control={<Checkbox defaultChecked size="small"/>}label="Remember me"/>
            <Link href="#">Forget Password?</Link>
            </div>
            <button type="submit">Login</button>
        </div>
        <div className="Icon">
        <img src={pic}  alt="icon"></img>
        </div>
    </div>
    </>
    );
}