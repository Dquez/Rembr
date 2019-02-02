import React from 'react';
import PropTypes from 'prop-types';
import './DeleteBtn.css';

class DeleteBtn extends React.Component {
  
  render () {
    return (
      <button className='btn btn-sm btn-danger delete-btn' onClick={this.props.onClick}>
        Remove Page
      </button>
    );
  }
}

DeleteBtn.props = {
  onClick: PropTypes.func
}

export default DeleteBtn;
