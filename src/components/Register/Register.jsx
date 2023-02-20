import React from "react";
import TextField from '@mui/material/TextField';
import PasswordField from '@mui/material/TextField';
import { useNavigate, useRouteError } from "react-router-dom";
import { useState } from "react";
import "../Register/Register.css";
import pic from "../Images/Register1.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

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
            errors.userExists = "";
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
        
        if(formErrors.userExists == ""){
            navigate("Login");
        }else{
            alert(formErrors.userExists+" "+formErrors.validUsername+" "
             + formErrors.validEmail + " " + formErrors.validPassword  );
        }
        // if(Object.keys(requiredFieldErrors).length == 0){
        //     navigate("Login");
        // }else{
        //     alert("all fields are required");
        // }
    }


    return (
        <>
         <div className="main1">
        
        <div className="form_div">
            <div id="create-account">Create an account</div>
            <TextField required id="outlined-basic" label="Username" variant="outlined" onChange={handleName} className="inp-field"/><br/>
           <span className="error-msg"> {formErrors.userExists} </span>
           <span className="error-msg">{formErrors.validUsername}</span>
            <TextField required type="email" className="inp-field" id="outlined-basic" label="Email" variant="outlined" onChange={handleEmail}/><br/>
            <span className="error-msg">{formErrors.validEmail}</span>
            <TextField required className="inp-field" id="outlined-basic" label="Phone No." variant="outlined" onChange={handlePhoneNo}/><br/>
            <span className="error-msg">{formErrors.validPhone}</span>
            <TextField required type="password" className="inp-field" id="outlined-basic" label="Password" variant="outlined" onChange={handlePassword}/><br/>
            <span className="error-msg">{formErrors.validPassword}</span>
            <TextField required type="password" className="inp-field" id="outlined-basic" label="Confirm-Password" variant="outlined" onChange={handleConfirmPassword}/><br/>
            <span className="error-msg">{formErrors.validConfirmPassword}</span>
            <button type="submit" className="register-btn" onClick={HandleRegister}>Register</button>
            
            <div id="#login-msg">
                Already registered user?
                <a href="#Login">Login</a>
            </div>
            </div>
        <div className="Icon1">
                <img src={pic} alt="icon"></img>
        </div>
        </div> 
        </>
    )
}