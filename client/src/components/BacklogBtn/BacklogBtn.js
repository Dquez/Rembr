import React from "react";
import PropTypes from 'prop-types';
// import "./PriorityBtn.css"

class BacklogBtn extends React.Component {
  render () {
    return (
      <div className=" btn-lg">
        <span onClick={this.props.onClick} className="glyphicon glyphicon-send"></span>
      </div>
    );
  }
}



BacklogBtn.props = {
  onClick: PropTypes.func
}

export default BacklogBtn;
