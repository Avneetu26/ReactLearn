import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/Constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
    const [btnName, setBtnName] = useState("LogIn");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus ? "Online" : "Offline"}
                    </li>
                    <li>
                        <Link to={"/"}> Home </Link>
                    </li>
                    <li>
                        <Link to={"/about"}> About Us </Link>
                    </li>
                    <li>
                        <Link to={"/contact"}> Contact Us </Link>
                    </li>
                    <li>
                        <Link to={"/grocery"}> Grocery </Link>
                    </li>
                    <li>Cart</li>
                    <button onClick={() => {
                        if(btnName === 'LogIn') {
                            setBtnName("LogOut");
                        } else {
                            setBtnName("LogIn")
                        }
                        
                    }} className="login-btn">{btnName}</button>
                </ul>
            </div>
        </div>

    );
};


export default HeaderComponent;