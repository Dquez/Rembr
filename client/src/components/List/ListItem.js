import React from "react";
import PropTypes from 'prop-types';
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
                <form style={{padding:"12px"}} onSubmit={(e) => {
                  this.props.handleSubmit(e, article._id);
                }}>
                    <input type="text" onChange={this.props.handleTagChange} className="form-control" placeholder="Enter a tag"/>
                </form>
                :
                article.tags.map((tag, i)=> <li key={i}>{tag}</li>
                )}
              </ul>
        {this.props.children}
      </li>
    )
  }
}

ListItem.props = {
  children: PropTypes.node
}

export default ListItem;
