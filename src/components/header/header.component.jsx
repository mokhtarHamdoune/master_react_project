import React from "react";
import "./header.style.scss";
import {Link} from "react-router-dom";
import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from "../../assets/crown.svg";
const Header =({currentUser})=>(
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link to="/contact" className="option">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className="option" onClick={()=>auth.signOut()}>
                    Sign Out
                </div> 
                :
                <Link className="option" to="/sign">
                    Sign In
                </Link>
            }
        </div>
    </div>
);
export default Header;