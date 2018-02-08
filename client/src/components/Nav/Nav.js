import React from "react";
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../../utils/AuthService';

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          React Reading List
        </a>
        {
             ( isLoggedIn() ) ? <Link to="/books">View your articles</Link> :  ''
        }
        <br />
        {
             (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
        }

      </div>
    </div>
  </nav>;

export default Nav;
