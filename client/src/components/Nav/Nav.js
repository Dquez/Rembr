import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../../utils/AuthService';
import { Col, Row, Container } from "../../components/Grid";
import "./nav.css"

class Nav extends React.Component {

  render () {
    // const { fluid, children } = this.props

    return (
      // <Container fluid>
      // <Row>
          <div className="nav-side">
            <div className="navbar-brand">
            <Link to="/"><img src="" alt=""/> LOGO IMAGE HERE</Link>
            </div>
            <div className="home">
            <Link to="/">Home</Link>
            </div>
            <div className="navbar-tutorial">
            <Link to="/tutorial">Tutorial</Link>
            </div>

          </div>
    );
  }

}
  // Nav.props = {
  //   fluid: PropTypes.string,
  //   children: PropTypes.node
  // }
  
  export default Nav;
