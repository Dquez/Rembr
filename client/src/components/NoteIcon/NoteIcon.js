import React from "react";
import PropTypes from 'prop-types';
const FontAwesome = require('react-fontawesome');

class NoteIcon extends React.Component {
  render () {
    return (
        <FontAwesome
          className='super-crazy-colors'
          name='sticky-note'
          size='2x'
          style={{ textShadow: '0 0 0 rgba(0, 0, 0, 0.1)' }}
        />  
    );
  }
}

export default NoteIcon;
