import React from "react";
import PropTypes from 'prop-types';
import "./col.css";

class Col extends React.Component {

  render () {
    const {styleProp, size, children} = this.props

    const klass = size.split(" ").map(size => "col-" + size).join(" ");
    return (
        
      <div className={styleProp + " " + klass}>
          {children}
      </div>
    );
  }
};

Col.props = {
  styleProp: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node
}

export default Col;