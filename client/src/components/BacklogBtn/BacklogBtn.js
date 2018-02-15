import React from "react";
import PropTypes from 'prop-types';
// import "./PriorityBtn.css";
const FontAwesome = require('react-fontawesome');

class BacklogBtn extends React.Component {
  render () {
    return (
      <span onClick={this.props.onClick}>
        <FontAwesome
          className='super-crazy-colors'
          name='history'
          size='2x'
          style={{ textShadow: '0 0 0 rgba(0, 0, 0, 0.1)' }}
        />  
      </span>
    );
  }
}



BacklogBtn.props = {
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default BacklogBtn;
