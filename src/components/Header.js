import { useState } from "react";
import logo from "/images/logo.jpg"
import { Link } from "react-router-dom";

const Header = () => {
const [ogin_btn, setogin_btn]=useState('login');

    return (
      <div className="header">
        <div className="logoContainer">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li><Link to="/contact">contact Us</Link></li> 
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{ogin_btn==="login"?setogin_btn("logout"):setogin_btn("login")}}>{ogin_btn}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;