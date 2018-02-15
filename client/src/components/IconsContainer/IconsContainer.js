import React from "react";
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import NoteIcon from "../NoteIcon";

class IconsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        {this.props.noteId && 
          <div>
            <ReactTooltip id={this.props.noteId} place="right" type="dark" effect="float"/> 
            <div data-for="note" data-tip={this.props.note}><NoteIcon /></div>
          </div>
        }

        {this.props.favoriteId && 
        <div>
          <ReactTooltip id={this.props.favoriteId} place="right" type="dark" effect="float"/> 
          <div data-for="favorite" data-tip="Favorite this article">{this.props.children}</div> 
        </div>
        }

        {this.props.backlogId && 
        <div>
          <ReactTooltip id={this.props.backlogId} place="right" type="dark" effect="float"/> 
        <div data-for="backlog" data-tip="Backlog this article">{this.props.children}</div> 
        </div>  
        }
    </div>
    );
  }
}

IconsContainer.props = {
  children: PropTypes.func
}

export default IconsContainer;
