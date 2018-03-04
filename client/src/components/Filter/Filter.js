import React from "react";
import PropTypes from "prop-types";

class Filter extends React.Component {
      toggleDropDown = (elementId) => {
          const dropDown = document.getElementById(elementId);
          dropDown.style.display = dropDown.style.display === 'none' ? 'block' : 'none';
      }

    render () {
        return (
            <div className="dropup">
                <button className="btn btn-default dropdown-toggle" onClick={() => this.toggleDropDown("dropup")} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="glyphicon glyphicon-filter"></span>
                </button>
                <ul id="dropup" className="dropdown-menu">
                    <li>Action</li>
                    <li>Another action</li>
                    <li>Something else here</li>
                    <li role="separator" className="divider"></li>
                    <li>Separated link</li>
                </ul>
            </div>
        )
    }
 }

 export default Filter;