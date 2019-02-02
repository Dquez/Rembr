import React from 'react';
import PropTypes from 'prop-types';


class FavoriteBtn extends React.Component {
  render () {
    return (
      <div className='btn-lg'>
        {this.props.value === true ?
        <span onClick={this.props.onClick} className='glyphicon glyphicon-star'></span>
        :  
        <span onClick={this.props.onClick} className='glyphicon glyphicon-star-empty'></span>
        }
      </div>
    );
  }
}



FavoriteBtn.props = {
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default FavoriteBtn;
