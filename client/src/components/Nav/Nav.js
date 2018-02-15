import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../../utils/AuthService';
import { Col, Row, Container } from "../../components/Grid";
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
            {/* <div className="navbar-tutorial">
            <Link to="/tutorial">Tutorial</Link>
            </div> */}
          </div>
    );
  }

}
  // Nav.props = {
  //   fluid: PropTypes.string,
  //   children: PropTypes.node
  // }
  
  export default Nav;
