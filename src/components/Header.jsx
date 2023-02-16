import React from "react";
import SettingsIcon from '@material-ui/icons/Settings';
const header = () => {
    return (
        <>
            <div style={{ display: "inline-block" }}>
                <h3 style={{ display: "inline-block" , fontFamily : 'Poppins', fontStyle: "normal", fontWeight: 700, color: "#5D7186"}}>Auto</h3>
                <SettingsIcon style={{ fontSize: "50px", color: "#22a6b3", padding: "0px", display: "inline-block"  }} />
            </div>
        </>
    )
}

export default header;