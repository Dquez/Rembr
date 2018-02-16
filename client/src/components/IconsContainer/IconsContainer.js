import React from "react";
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import NoteIcon from "../NoteIcon";
import "./IconsContainer.css";
class IconsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="floatRight">
        {this.props.noteId && 
          <span>
            <ReactTooltip id={this.props.noteId} place="right" type="dark" effect="float"/> 
            <span data-for="note" data-tip={this.props.note}><NoteIcon /></span>
          </span>
        }

        {(this.props.favoriteId || this.props.unfavoriteId) && 
        <span>
          <ReactTooltip id={this.props.favoriteId || this.props.unfavoriteId} place="right" type="dark" effect="float"/> 
          <span data-for={this.props.favoriteId ? "favorite" : "unfavorite"} data-tip={this.props.favoriteId ?  "Favorite this article": "Unfavorite this article"}>{this.props.children}</span> 
        </span>
        }

        {this.props.backlogId && 
        <span>
          <ReactTooltip id={this.props.backlogId} place="right" type="dark" effect="float"/> 
        <span data-for="backlog" data-tip="Backlog this article">{this.props.children}</span> 
        </span>  
        }
        {this.props.priorityId && 
        <span>
          <ReactTooltip id={this.props.priorityId} place="right" type="dark" effect="float"/> 
        <span data-for="priority" data-tip="Prioritize this article">{this.props.children}</span> 
        </span>  
        }
    </div>
    );
  }
}

IconsContainer.props = {
  noteId: "string",
  favoriteId: "string",
  unfavoriteId: "string",
  backlogId: "string",
  priorityId: "string",
  children: PropTypes.func
}

export default IconsContainer;
