import React from "react";
import PropTypes from 'prop-types';
import "./PriorityBtn.css";

class PriorityBtn extends React.Component {
  render () {
    return (
      <span className="btn danger-btn" onClick={this.props.onClick}>
        {this.props.type === "priority" ? "Save for later": "Push to your priority stack"}
      </span>
    );
  }
}

PriorityBtn.props = {
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default PriorityBtn;
