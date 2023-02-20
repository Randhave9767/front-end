import React, { useState, useEffect } from "react";


 

import TextField from "@mui/material/TextField";


 

import Checkbox from "@mui/material/Checkbox";


 

import { FormControlLabel } from "@mui/material";


import log from "../Images/Sign.png";


 

import "./Login.css";


 

import Link from "@mui/material/Link";

import { useNavigate } from "react-router-dom";


 

export default function Login() {

  const navigate = useNavigate();


 

  const detail = { email: "", password: "" };


 

  const [formvalue, setFormvalue] = useState(detail);

  const [formerror, setFormerror] = useState({});

  const [issubmit, setSubmit] = useState(false);


 

  const handleformvalue = (e) => {

    const { name, value } = e.target;


 

    setFormvalue({ ...formvalue, [name]: value });

  };


 

  const handleerrror = (value) => {

    const errors = {};


 

    const emailRegex = new RegExp(

      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"

    );


 

    const passwordRegex = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");


 

    if (value.email === "") errors.email = "Please enter email !!";

    else if (!emailRegex.test(value.email))

      errors.email = "Enter valid email !!";


 

    if (value.password === "") errors.password = "Please enter password !!";

    else if (!passwordRegex.test(value.password))

      errors.password = "Enter valid password !!";


 

    return errors;

  };


 

  const handlesubmit = (e) => {

    e.preventDefault();


 

    setFormerror(handleerrror(formvalue));


 

    setSubmit(true);

  };


 

  useEffect(() => {

    if (Object.keys(formerror).length === 0 && issubmit) {

      navigate("/Sidebar");


 

      setFormvalue(detail);

    }

  }, [formvalue, formerror, issubmit]);


 

  return (

    <>

      <div className="container">

        <div className="row ">

          <div className="login_div col">

            <h3>Hi, Welcome back!👋</h3>

            <br />


 

            <TextField

              id="outlined-basic"

              label="Email"

              variant="outlined"

              name="email"

              onChange={handleformvalue}

              className="formfield"

            />

            <br />

            <span className="error_msg">

              <h6>{formerror.email}</h6>

            </span>


 

            <TextField

              id="outlined-basic"

              label="Password"

              type="password"

              variant="outlined"

              name="password"

              onChange={handleformvalue}

              className="formfield"

            />

            <br />

            <span className="error_msg">

              <h6>{formerror.password}</h6>

            </span>


 

            <div className="remember formfield">

              <FormControlLabel

                control={<Checkbox defaultChecked size="small" />}

                label="Remember me"

              />


 

              <Link href="#">Forget Password?</Link>

            </div>

            <br />


 

            <button

              type="submit"

              onClick={handlesubmit}

              id="loginsubmitbutton"

              className="formfield"

            >

              Login

            </button>

            <br />


 

            <div id="gotoregisterlink" className="formfield">

              <label>

                <h6>New User? </h6>

              </label>

              <Link href="/Register">Register here</Link>

            </div>

          </div>


 

          <div className="Icon col">

            <img src={log} alt="icon"></img>

          </div>

        </div>

      </div>

    </>

  );

}

