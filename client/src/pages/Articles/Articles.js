import React from "react";
import IconsContainer from "../../components/IconsContainer";
import Banner from "../../components/Banner";
import DeleteBtn from "../../components/DeleteBtn";
import NoteIcon from "../../components/NoteIcon";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import {getUserInfo} from '../../utils/AuthService'; 
import { login, logout, isLoggedIn } from '../../utils/AuthService';
import Particles from 'react-particles-js';
import particlesConfig from "./particlesConfig.json";
import PriorityBtn from "../../components/PriorityBtn";
import BacklogBtn from "../../components/BacklogBtn"; 
import FavoriteBtn from "../../components/FavoriteBtn";
import logo from './assets/images/R.png';
import "./article.css";


class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      email: "",
      articleId : null,
      tag: ""
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

  handleInputChange = (e, articleId) => {
    const {value} = e.target
    this.setState ({
      tag : value
    })
  }

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
          <Col style="side-bar" size="md-2">
            <Nav/>
            {
                isLoggedIn() ?   <button className="btn btn-danger log" onClick={() =>{
                  logout()
                  window.location = "/";
                }}>Log out </button>: <button className="btn btn-info" onClick={() => login()}>Log In</button>
            }
          </Col>
          <Col style="main" size="md-10 sm-12">
          <Particles style={{position:"absolute"}} params={particlesConfig}/>
            <Banner>
              <h4>Add Rembr to Chrome 
                <a href="https://chrome.google.com/webstore/detail/rembr/mpbdabjachklldenkpdnpnhbnhoebnnm"><img src={logo} style={{width:"100px",height:"100px", marginLeft:"24px"}} target="_blank" alt="Rembr Icon" /></a>
              </h4>  
            </Banner>
            <Row>
              <Col style="left-articles" size="md-4">
            {this.state.articles.length ? (
              <List>
                <h3 style={{textAlign:"center"}}>Priority</h3>
                {priority.map(article => {
                  return (         
                  <ListItem key={article._id}>
                      <a href={article.url}>
                      <strong><h4> {article.title} seen on {article.date.split("T")[0]} <br/> </h4> </strong>
                        </a>
                          <div onClick={this.handleClickEvent}>
                            <p>Tags:</p>
                          
                          <ul>{article.tags.length === 0 ? 
                             <form style={{padding:"12px"}} onSubmit={(e) => {
                              this.handleSubmit(e, article._id);
                             }}>
                             <input type="text" onChange={this.handleInputChange} className="form-control" placeholder="Enter a tag"/>
                             </form>
                            :
                            article.tags.map((tag, i)=> <li key={i}>{tag}</li>)
                            }
                          </ul>
                          </div>
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
            ) : (
                <h3 style={{textAlign:"center"}}>No Results to Display Yet</h3>
              )}
              </Col>
              <Col style="mid-articles" size="md-4">
              {backlog.length ? (
                <List>
                  <h3 style={{textAlign:"center"}}>Backlog</h3>
                  {backlog.map(article => {
                    return (
                      <ListItem key={article._id}>
                        {/* <a href={"/books/" + book._id}> */}
                        <a href={article.url}>
                        <strong><h3> {article.title} seen on {article.date} <br/> </h3> </strong>
                          </a>
                            <p>Note : {article.note}</p>
                            <p>Tags: </p>
                            <ul>{article.tags.map((tag, i)=> <li key={i}>{tag}</li>)}
                            </ul>
                            <IconsContainer noteId="note" note={article.note}/>
                          <IconsContainer favoriteId="favorite"> 
                          <FavoriteBtn type="favorite" onClick={() => this.favoriteArticle(article._id, true)}/> </IconsContainer>
                          <IconsContainer backlogId="backlog">
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
                <Col style="right-articles" size="md-4">
              {favorites.length ? (
                <List>
                  <h3 style={{textAlign:"center"}}>Favorites</h3>
                  {favorites.map(article => {
                    return (
                      
                      <ListItem key={article._id}>
                       
                        <a href={article.url}>
                        <strong><h3> {article.title} seen on {article.date} <br/> </h3> </strong>
                          </a>
                            <p>Note : {article.note}</p>
                            <p>Tags: </p>
                            <ul>{article.tags.map((tag, i)=> <li key={i}>{tag}</li>)}
                            </ul>
                            <IconsContainer noteId="note" note={article.note}/>
                            <IconsContainer favoriteId="favorite"> 
                            <FavoriteBtn type="unfavorite" data-tip={"Remove from favorites"} onClick={() => this.favoriteArticle(article._id, false)}/> 
                            </IconsContainer>
                            <DeleteBtn onClick={() => this.deleteArticle(article._id)} />                     
                      </ListItem>

                    );
                  })}
                </List>
              ) : (
                  <h3 style={{textAlign:"center"}} >You haven't saved any favorites yet</h3>
                )}
                </Col>
              </Row>
              
          </Col>
          {/* </Container> */}
        </Row>
      </Container>
    );
  }
}

export default Articles;
