import React from "react";
import PropTypes from 'prop-types';

class NoteIcon extends React.Component {
  render () {
    return (
      <div className=" btn-lg">
      <span onClick={this.props.onClick} className="glyphicon glyphicon-list-alt"></span> 
      </div>
    );
  }
}
NoteIcon.props = {
  onClick: PropTypes.func,
}

export default NoteIcon;
