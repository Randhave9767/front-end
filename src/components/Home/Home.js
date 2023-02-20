import React from "react";
import "./Home.css";
import pic from "../Images/landing page image.png";


export default function Home() {

    return (
        <>
            <div className="main">
                <div className="text">
                    <div id="first-line">NO-CODE TESTING FOR THE ENTERPRISE</div>
                    <div id="second-line">Test Faster In Less Time</div>
                    <div id="third-line">QA automation by simply going through UI interaction.</div>
                    <button id="get-started">Get Started</button>
                </div>
                <div className="icon">
                    <img src={pic} alt="icon"></img>
                </div>
            </div>
        </>
    );
}