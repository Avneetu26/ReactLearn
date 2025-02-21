import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/Constants";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
    const [btnName, setBtnName] = useState("LogIn");

    const {loggedInUser} = useContext(UserContext);

    const onlineStatus = useOnlineStatus();

    // subscribing to our store
    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className="flex justify-between bg-purple-100 shadow-lg m-2">
            <div className="w-16 m-2">
                <img src={LOGO_URL}/>
            </div>

            <div className="flex items-center">
                <ul className="flex m-4 p-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "Online" : "Offline"}
                    </li>
                    <li className="px-4">
                        <Link to={"/"}> Home </Link>
                    </li>
                    <li className="px-4">
                        <Link to={"/about"}> About Us </Link>
                    </li>
                    <li className="px-4">
                        <Link to={"/contact"}> Contact Us </Link>
                    </li>
                    <li className="px-4">
                        <Link to={"/grocery"}> Grocery </Link>
                    </li>


                    <li className="px-4">
                        <Link to={"/cart"}>  Cart ({cartItems.length} items) </Link>
                    </li>


                    <li className="px-4">{loggedInUser}</li>
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