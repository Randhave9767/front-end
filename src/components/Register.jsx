import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import PasswordField from '@mui/material/TextField';
import { useNavigate, useRouteError } from "react-router-dom";
import { useState } from "react";

export default function Register()
{
    const [userDetails, setDetails] = useState({
        username:"",
        email:"",
        phoneNo:"",
        password:"",
        confirmPassword:"",
    });

    const [formErrors, setFormErrors] = useState({});
    const [requiredFieldErrors, setRequiredFieldErrors] = useState({});
    const navigate = useNavigate();

    const handleName = (e)=>{
        const usernames = ["omkar", "akash", "atharva", "kunal"];
        const errors = {...formErrors};
        if(usernames.includes(e.target.value)){
           errors.userExists = "username is taken";   
        }else{
            errors.userExists = "available";
        }

        const usernameRegex = new RegExp(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/);
        if(!usernameRegex.test(e.target.value)){
            errors.validUsername = "only alphabets, numbers, _, , $, length = 8-20";
        }else{
            errors.validUsername = "";
        }

        setFormErrors((er)=>({
            ...errors
        }));

        const details = {...userDetails};
        details.username = e.target.value;
        setDetails((d)=>({
            ...details
        }));
       
    }

    const handleEmail = (e)=>{
        const errors = {...formErrors};

        const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        if(emailRegex.test(e.target.value)){
            errors.validEmail = "";
        }else{
            errors.validEmail = "Invalid email";
        }

        setFormErrors(errors);

        const details = {...userDetails};
        details.email = e.target.value;
        setDetails((d)=>({
            ...details
        }));

    }

    const handlePassword = (e)=>{
        const errors = {...formErrors};
        const passwordRegex = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
        if(passwordRegex.test(e.target.value)){
            errors.validPassword = "";
        }else{
            errors.validPassword = "Invalid password";
        }
        setFormErrors(errors);

        const details = {...userDetails};
        details.password = e.target.value;
        setDetails((d)=>({
            ...details
        }));
    }

    const handleConfirmPassword = (e)=>{
        const errors = {...formErrors};
       
        if(userDetails.password == e.target.value){
            errors.validConfirmPassword = "";
        }else{
            errors.validConfirmPassword = "Password and confirm password should be same";
        }
        setFormErrors(errors);

        
    }

    const handlePhoneNo = (e)=>{
        const errors = {...formErrors};
        
        const phoneRegex = new RegExp('^[1-9]{1}[0-9]{9}$');
        if(phoneRegex.test(e.target.value)){
            errors.validPhone = "";
        }else{
            errors.validPhone = "Invalid Phone No.";
        }
        setFormErrors(errors);

        const details = {...userDetails};
        details.phoneNo = e.target.value;
        setDetails((d)=>({
            ...details
        }));
        
    }

    const validateRequiredField = (values) => {
        const errors = {};
       

        if (!values.username)
          errors.username = "username is required";
    
        if (!values.phoneNo)
          errors.phoneNo = "phone number is required";
    
        if (!values.email)
          errors.email = "email is required";
    
        if (!values.password)
          errors.password = "password is required";
    
        if (!values.confirmPassword)
          errors.confirmPassword = "confirmPassword is required";
    
        setRequiredFieldErrors(errors);
    
      }

    const HandleRegister = (e)=>{
        
        validateRequiredField(userDetails);
        
        if(formErrors.userExists == "available"){
            navigate("Login");
        }else{
            alert(formErrors);
        }

        // if(Object.keys(requiredFieldErrors).length == 0){
            

        //     navigate("Login");
        // }else{
            
        //     alert("all fields are required");
        // }
    
    }


    return (
        <>
        {/* <h1>{requiredFieldErrors.username}</h1> */}
        <Box component="form"
        sx={{
        '& .MuiTextField-root': {  width: '25ch'},
        }}
        
        >
        <div className="form_div">
            <h2>Create an account</h2>
            <h5>Connect with your friends today!</h5><br/>
            
            
            <TextField required id="outlined-basic" label="Username" variant="outlined" onChange={handleName}/><br/>
            {formErrors.userExists}
            {formErrors.validUsername}
            <TextField required type="email" id="outlined-basic" label="Email" variant="outlined" onChange={handleEmail}/><br/>
            {formErrors.validEmail}
            <TextField required id="outlined-basic" label="Phone No." variant="outlined" onChange={handlePhoneNo}/><br/>
            {formErrors.validPhone}
            <TextField required type="password" id="outlined-basic" label="Password" variant="outlined" onChange={handlePassword}/><br/>
            {formErrors.validPassword}
            <TextField required type="password" id="outlined-basic" label="Confirm-Password" variant="outlined" onChange={handleConfirmPassword}/><br/>
            {formErrors.validConfirmPassword}
            <Button variant="contained" type="submit" onClick={HandleRegister}>Sign Up</Button>
            
        </div>
        </Box>
        </>
    )
}