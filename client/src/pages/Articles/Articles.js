import React from "react";
import IconsContainer from "../../components/IconsContainer";
import Banner from "../../components/Banner";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import Search from "../../utils/Search";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import SearchBar from "../../components/Search";
import {getUserInfo} from '../../utils/AuthService'; 
import {isLoggedIn } from '../../utils/AuthService';
import Particles from 'react-particles-js';
import particlesConfig from "./particlesConfig.json";
import PriorityBtn from "../../components/PriorityBtn";
import BacklogBtn from "../../components/BacklogBtn"; 
import FavoriteBtn from "../../components/FavoriteBtn";
import "./article.css";


class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      email: "",
      articleId : null,
      tag: "",
      search: "",
      keywordArticles : []
    };
  }

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    // callback function to retrieve the user's email from the AuthService file
    getUserInfo(email=> {
      this.setState({
        email: email
      })
      this.loadBooks(email);
    }) 
  }

  // Loads all books  and sets them to this.state.books
  loadBooks = (email) => {
    API.getArticles(email)
      .then(res =>
        this.setState({ articles: res.data})
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadBooks(this.state.email))
      .catch(err => console.log(err));
  };

  saveForLater = (id, decision) => {
    API.saveForLater(id, decision)
      .then(res => {
        this.loadBooks(this.state.email);
      })
      .catch(err => console.log(err));
  };

  favoriteArticle = (id, decision) => {
    API.favoriteArticle(id, decision)
    .then(res => {
      this.loadBooks(this.state.email);
    })
      .catch(err => console.log(err));
  };

  handleTagChange = (e, articleId) => {
    const {value} = e.target
    this.setState ({
      tag : value
    })
  }

    // Handles updating component state when the user types into the input field
  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
        keywordArticles : Search.keywordSearch(this.state.articles, value)
    });
    console.log(this.state.keywordArticles);
  };

  handleSubmit = (e, id) => {
    e.preventDefault();
    const tag = this.state.tag;
    API.addTag(id,tag)
    .then(res => {
      this.loadBooks(this.state.email);
    })
      .catch(err => console.log(err));
  }

  render() {
    let priority = this.state.articles.filter(article=> !article.saveForLater && !article.favorited);
    let backlog = this.state.articles.filter(article=> article.saveForLater && !article.favorited);
    let favorites = this.state.articles.filter(article=> article.favorited);
                        
    return (
      <Container fluid>
        <Row>
          <Col styleProp="side-bar" size="md-2">
            <Nav/>
          </Col>
          <Col styleProp="main" size="md-10 sm-12">
          <Particles style={{position:"absolute"}} params={particlesConfig}/>
          <Banner/>
            <Row>
            {!isLoggedIn() && 
            <Col size="md-12"> <h3 className="text-center">Please log in to view your articles.</h3> </Col>}
            {!this.state.articles.length && isLoggedIn() ? 
            <Col size="md-12"><h3 className="text-center">Please save articles using the extension to view them here.</h3></Col> : ""}
            {isLoggedIn() && this.state.articles.length ?
             <div>
              <Col styleProp="left-articles" size="md-4">
              {priority.length ? (
              <List>
                <h3 style={{textAlign:"center"}}>Priority</h3>
                {priority.map(article => {
                  return (         
                  <ListItem key={article._id}>
                      <a className="article-url" href={article.url}>
                      <strong><h4> {article.title} </h4></strong></a>
                       <p> Viewed: {article.date.split("T")[0]} </p>  
                      
                          <p>Tags:</p>
                          <ul>{article.tags.length === 0 ? 
                             <form style={{padding:"12px"}} onSubmit={(e) => {
                              this.handleSubmit(e, article._id);
                             }}>
                             <input type="text" onChange={this.handleTagChange} className="form-control" placeholder="Enter a tag"/>
                             </form>
                            :
                            article.tags.map((tag, i)=> <li key={i}>{tag}</li>)
                            }
                          </ul>
                          <IconsContainer noteId="note" note={article.note}/>
                          <IconsContainer favoriteId="favorite"> 
                          <FavoriteBtn type="favorite" onClick={() => this.favoriteArticle(article._id, true)}/> </IconsContainer>
                          <IconsContainer backlogId="backlog">
                          <BacklogBtn type="toBacklog" onClick={() => this.saveForLater(article._id, true)} />
                          </IconsContainer>
                          <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                </ListItem>
                  );
                })}
              </List>
              )
              : (
                <h3 style={{textAlign:"center"}}>Priority</h3>
              )}
              </Col>
              <Col styleProp="mid-articles" size="md-4">
              {backlog.length ? (
                <List>
                  <h3 style={{textAlign:"center"}}>Backlog</h3>
                  {backlog.map(article => {
                    return (
                      <ListItem key={article._id}>
                        <a className="article-url" href={article.url}>
                        <strong><h4> {article.title} </h4> </strong></a>
                        <p> Viewed: {article.date.split("T")[0]} </p>  
                       
                            <p>Tags:</p>
                            <ul>{article.tags.map((tag, i)=> <li key={i}>{tag}</li>)}</ul>
                            <IconsContainer noteId="note" note={article.note}/>
                          <IconsContainer favoriteId="favorite"> 
                          <FavoriteBtn type="favorite" onClick={() => this.favoriteArticle(article._id, true)}/> </IconsContainer>
                          <IconsContainer priorityId="priority">
                          <PriorityBtn onClick={() => this.saveForLater(article._id, false)} />
                          </IconsContainer>       
                        <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                  <h3 style={{textAlign:"center"}}>Nothing on backlog yet</h3>
                )}
                </Col>
                <Col styleProp="right-articles" size="md-4">

              
                <SearchBar value={this.state.search}
                    onChange={this.handleInputChange}
                    name="search"
                    placeholder="Search for a keyword..." 
                  />
                   {this.state.keywordArticles.length && this.state.search && (
                <List>
                  {favorites.map(article => {
                    return (
                      
                      <ListItem key={article._id}>
                        <a className="article-url" href={article.url}>
                        <strong><h4> {article.title} </h4> </strong> </a>
                        <p> Viewed: {article.date.split("T")[0]} </p>  
                      
                            <p>Tags: </p>
                            <ul>{article.tags.map((tag, i)=> <li key={i}>{tag}</li>)}
                            </ul>
                            <IconsContainer noteId="note" note={article.note}/>
                            <IconsContainer unfavoriteId="unfavorite"> 
                            <FavoriteBtn onClick={() => this.favoriteArticle(article._id, false)}/> 
                            </IconsContainer>
                            <DeleteBtn onClick={() => this.deleteArticle(article._id)} />                     
                      </ListItem>

                    );
                  })}
                </List>
                   )}
                 
                </Col>
              </div> : ""}
              </Row>
              
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
