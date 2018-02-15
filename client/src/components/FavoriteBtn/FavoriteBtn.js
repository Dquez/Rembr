import React from "react";
import PropTypes from 'prop-types';
// import "./FavoriteBtn.css";
const FontAwesome = require('react-fontawesome');

class FavoriteBtn extends React.Component {
  render () {
    return (
      <span onClick={this.props.onClick}>
        {this.props.type === "favorite" ?
        <FontAwesome
          className='super-crazy-colors'
          name='star'
          size='2x'
          style={{ color: 'rgb(155,155,155)'}}
        />  
        :  
        <FontAwesome
        className='super-crazy-colors'
        name='star'
        size='2x'
        style={{ color: 'rgb(255,255,51)' }}
      /> 
      }
      </span>
    );
  }
}



FavoriteBtn.props = {
  onClick: PropTypes.func
}

export default FavoriteBtn;
