import React from "react";
import PropTypes from 'prop-types';

class Col extends React.Component {

  render () {
    const { style,size, children } = this.props

    const klass = size.split(" ").map(size => "col-" + size).join(" ");

    return (
      <div className={style + " " + klass}> 
          {children}
      </div>
    );
  }
};

Col.props = {
  size: PropTypes.string,
  children: PropTypes.node
}

export default Col;