import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
// import {favoriteArticle, saveForLater, deleteArticle} from "../../actions";
import { DeleteBtn, PriorityBtn, BacklogBtn, FavoriteBtn} from "../../components/Buttons";
import IconsContainer from "../../components/IconsContainer";
import "./List.css"
class ListItem extends React.Component {

  render () {
    const {article} = this.props;
    return (
      <li className="list-group-item">
        <a className="article-url" href={article.url}>
                <strong><h4> {article.title} </h4></strong>
              </a>
              <p> Viewed: {article.date.split("T")[0]} </p>  
              <p>Tags:</p>
              <ul>{article.tags.length === 0 
                ? 
                <form style={{padding:"12px"}} 
                  onSubmit={e => this.props.handleSubmit(e, article._id)}>
                    <input type="text" onChange={this.props.handleTagChange} className="form-control" placeholder="Enter a tag"/>
                </form>
                :
                article.tags.map((tag, i)=> <li key={i}>{tag}</li>
                )}
              </ul>
              <IconsContainer noteId="note" note={article.note}/>
              <IconsContainer value={article.favorited} favoriteId="favorite"> 
                <FavoriteBtn type="favorite" value={article.favorited} onClick={() => this.props.favoriteArticle(article._id, !article.favorited)}/> 
              </IconsContainer>

              {
              this.props.type === "Priority" ?
              <IconsContainer backlogId="backlog">
                <BacklogBtn type="toBacklog" onClick={() => this.props.saveForLater(article._id, true)} />
              </IconsContainer>
              :
              this.props.type === "Backlog" ?
              <IconsContainer priorityId="priority">
                          <PriorityBtn onClick={() => this.props.saveForLater(article._id, false)} />
              </IconsContainer> 
              :
              ""     
              }
              <DeleteBtn onClick={() => this.props.deleteArticle(article._id)} />
      </li>
    )
  }
}

ListItem.props = {
  children: PropTypes.node
}


export default ListItem;
// favoriteArticle, saveForLater, deleteArticle are destructured methods, now hooked up to redux and available as props
// export default connect(null, {favoriteArticle, saveForLater, deleteArticle})(ListItem);
