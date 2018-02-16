import React from "react";
import PropTypes from 'prop-types';
// import "./FavoriteBtn.css";

class FavoriteBtn extends React.Component {
  render () {
    return (
      <div className="btn-lg">
        {this.props.type === "favorite" ?
        <span onClick={this.props.onClick} className="glyphicon glyphicon-star-empty"></span>
        :  
        <span onClick={this.props.onClick} className="glyphicon glyphicon-star"></span>
        }
      </div>
    );
  }
}



FavoriteBtn.props = {
  onClick: PropTypes.func
}

export default FavoriteBtn;
