import React from "react";

import PropTypes from 'prop-types';
import "./List.css"
class ListItem extends React.Component {

  render () {

    return (
      <li className="list-group-item">
        {this.props.children}
      </li>
    )
  }
}

ListItem.props = {
  children: PropTypes.node
}

export default ListItem;
