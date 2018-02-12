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
      <Container fluid>
      <Row>
          {/* <Col size="md-12"> */}
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
            {
                (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
            }
          </div>
        {/* </Col> */}
      </Row>
    </Container>
    );
  }

}
  // Nav.props = {
  //   fluid: PropTypes.string,
  //   children: PropTypes.node
  // }
  
  export default Nav;
