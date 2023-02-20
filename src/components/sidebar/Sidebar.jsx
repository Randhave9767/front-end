import React from "react";
import "./Sidebar.css";
import Navbar from 'react-bootstrap/Navbar';
import Header from "../Header";
import Nav from 'react-bootstrap/Nav';
import log from "../Images/profile.png";
import Dashboard from "../Dashboard/Dashboard";



export default function Sidebar() {

    return (
        <div className="container-fluid screen">

            <div className="row ">
                <div className="col-md-2" >
                    <div className="sidenav ">



                        {/* <Navbar sticky="top"> */}
                        <div className="icon"><Header /></div>
                        <hr />
                        <div className="profile">
                            <img className="profilePic" src={log} alt="icon"></img>
                            <span className="username">prajakta036
                            </span>

                        </div>
                        <br />
                        <button className="logoutBtn">Logout</button>

                        <hr />
                        {/* <div className="navList"> */}
                        <a href="#Home" className="listItem" onClick={() => {

                        }}>Home</a><br /><br />

                        <a href="#Excel" className="listItem" onClick={() => {

                        }}>Excel Dashboard </a> <br /><br />

                        <a href="#Reports" className="listItem" onClick={() => {

                        }}>Reports</a>





                        {/* </div> */}




                        {/* </Navbar> */}


                    </div>


                </div>
                <div className="col-md-10 dashboard">
                    <Dashboard/>
                </div>
            </div>

        </div>
    );
}