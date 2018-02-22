import React from "react";
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../../utils/AuthService';
import logoDark from '../../pages/Articles/assets/images/R-dark.png';
import "./nav.css"

class Nav extends React.Component {

  render () {
    return ( 
          <div className="nav-side">
            <a href="https://chrome.google.com/webstore/detail/rembr/mpbdabjachklldenkpdnpnhbnhoebnnm"><img src={logoDark} style={{width:"100px",height:"100px", marginLeft:"24px"}} target="_blank" alt="Rembr Icon" /></a>
            <div className="home">
            <Link to="/">Home</Link>
            </div>
            {
                isLoggedIn() ?   <button className="btn btn-danger" onClick={() =>{
                  logout()
                  window.location = "/";
                }}>Log out </button>: <button className="btn btn-info" onClick={() => login()}>Log In</button>
            }
            {/* <div className="navbar-tutorial">
            <Link to="/tutorial">Tutorial</Link>
            </div> */}
          </div>
    );
  }

}

  export default Nav;
