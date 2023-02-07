import React from "react";
import { TextField } from "@material-ui/core";
export default function Register()
{
    return (
        <>
        <div className="form_div">
        <h2>Hi, Welcome Back!</h2>
        <form>
        <TextField id="outlined-basic" label="Email" varient="outlined"/><br/>
        <TextField id="outlined-basic" label="Password" varient="outlined"/>
        </form>
        </div>
        </>
    )
}