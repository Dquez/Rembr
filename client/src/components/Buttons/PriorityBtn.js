import React from 'react';
import PropTypes from 'prop-types';
import './PriorityBtn.css';

class PriorityBtn extends React.Component {
  render () {
    return (
      <div className='btn-lg'>
        <span onClick={this.props.onClick} className='glyphicon glyphicon-hourglass'></span>
      </div>
    );
  }
}



PriorityBtn.props = {
  onClick: PropTypes.func
}

export default PriorityBtn;
