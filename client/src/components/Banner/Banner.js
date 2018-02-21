import React from "react";
import PropTypes from 'prop-types';
import logo from './assets/images/R.png';
import "./banner.css";
class Banner extends React.Component {

  render () {

    return (
      <div className="banner">
        <img src={logo} style={{width:"100px",height:"100px"}} alt="Rembr Icon"/>
        <a href="https://chrome.google.com/webstore/detail/rembr/mpbdabjachklldenkpdnpnhbnhoebnnm" target="_blank"><button className="btn btn-success" style={{display:"inline"}}>Add Rembr to Chrome </button></a>
        <p>Rembr helps you save articles from anywhere on the web so you can free up your tab bar and bookmarks. Save notes to understand why you saved the pages to begin with.</p>
      </div>
      );
    }

}

Banner.props = {
  children: PropTypes.node
}

export default Banner;
