import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from "../Header";
import "./Navbar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";
import { Button } from "bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Register from "../Register/Register";
import Home from "../Home/Home";


export default function Navbar_() {

    const [pages, setPage] = useState("Home");

    return (<>

        <Navbar bg="white" sticky="top">
            <Container>

                <Navbar.Brand className="me-auto auto"><Header /></Navbar.Brand>
                {/* <Navbar.Brand href="#home" className="me-auto">Auto</Navbar.Brand> */}

                <Nav className="ml-auto">
                    <Nav.Link href="#Home" onClick={
                        () => {
                            setPage("Home");
                        }
                    } className="NavLink">Home</Nav.Link>
                    <Nav.Link href="#Documentation" onClick={
                        () => {
                            setPage("Doc");
                        }
                    } className="NavLink">Documentation</Nav.Link>
                    <Nav.Link href="#Demo" onClick={
                        () => {
                            setPage("Demo");
                        }
                    } className="NavLink">Demo</Nav.Link>
                    <Nav.Link href="#Login" onClick={
                        () => {
                            setPage("Login");
                        }
                    } className="NavLink">Login</Nav.Link>
                    <Nav.Link href="#SignUp" onClick={
                        () => {
                            setPage("Register");
                        }
                    } className="NavLink">SignUp</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <NavContent page={pages} />

    </>
    );
}

function NavContent(props) {
    return (
        <div>

            {props.page == "Home" ?
                <h1><Home/></h1>
                : <></>}
            {props.page == "Doc" ?
                <h1>Documentation Page</h1>
                : <></>}
            {props.page == "Demo" ?
                <h1>Demo Page</h1>
                : <></>}
            {props.page == "Login" ?
                <Login/>
                : <></>}
            {props.page == "Register" ?
                <Register/>
                : <></>}

            

        </div>
    );


}

