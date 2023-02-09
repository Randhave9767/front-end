import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { useNavigate, useRouteError } from "react-router-dom";
import { useState } from "react";

export default function Register()
{
    const [name , setName] = useState();
    const navigate = useNavigate();

    const handleName = (e)=>{
        setName(e.target.value);
    }

    const HandleRegister = (e)=>{

        navigate("Login");

    }
    return (
        <>
        <h1>{name}</h1>
        <Box component="form"
        sx={{
        '& .MuiTextField-root': {  width: '25ch'},
        }}
        
        >
        <div className="form_div">
            <h2>Create an account</h2>
            <h5>Connect with your friends today!</h5><br/>
            
            
            <TextField id="outlined-basic" label="Username" variant="outlined" onChange={handleName}/><br/>
            <TextField id="outlined-basic" label="Email" variant="outlined" /><br/>
            <TextField id="outlined-basic" label="Phone No." variant="outlined" /><br/>
            <TextField id="outlined-basic" label="Password" variant="outlined"/><br/>
            <Button variant="contained" type="submit" onClick={HandleRegister}>Sign Up</Button>
            
        </div>
        </Box>
        </>
    )
}