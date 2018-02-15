import React from "react";
import PropTypes from 'prop-types';
import "./banner.css";
class Banner extends React.Component {

  render () {

    return (
      <div className="banner">
        {this.props.children}
      </div>
      );
    }

}

Banner.props = {
  children: PropTypes.node
}

export default Banner;
