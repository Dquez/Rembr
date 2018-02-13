import React from "react";
import Banner from "../../components/Banner";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import {getUserInfo} from '../../utils/AuthService'; 
import Particles from 'react-particles-js';
import particlesConfig from "./particlesConfig.json";
import PriorityBtn from "../../components/PriorityBtn";
import "./article.css";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      title: "",
      url: "",
      note: ""
    };
  }

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    // callback function to retrieve the user's email from the AuthService file
    getUserInfo(email=> {
      this.loadBooks(email);
    }) 
  }

  // Loads all books  and sets them to this.state.books
  loadBooks = (email) => {
    API.getArticles(email)
      .then(res =>
        this.setState({ articles: res.data, title: "", url: "", note: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    let priority = this.state.articles.filter(article=> !article.saveForLater && !article.favorited);
    let backlog = this.state.articles.filter(article=> article.saveForLater);
    let favorites = this.state.articles.filter(article=> article.favorited);
    return (
      <Container fluid>
        <Row>
          <Col style="side-bar" size="md-2">
            <Nav/>
          </Col>
          <Col style="main" size="md-9 sm-12">
            <Banner>
              <h1>Articles on my list</h1>  
            </Banner>
            <Particles style={{position:"relative", float:"left"}} params={particlesConfig}/>
            <Container fluid>
            <Row>
              <Col size="md-4">
              
            {this.state.articles.length ? (
              <List>
                <h3>Priority</h3>
                {priority.map(article => {
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
                      <DeleteBtn onClick={() => this.deleteBook(article._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
              </Col>
              <Col size="md-4">
              
              {this.state.articles.length ? (
                <List>
                  <h3>Backlog</h3>
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
                        <PriorityBtn type="priority" onClick={() => console.log("Clicked1")} />
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
                </Col>
                <Col size="md-4">
              {this.state.articles.length ? (
                <List>
                  <h3>Favorites</h3>
                  {favorites.map(article => {
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
                            <PriorityBtn type="backlog" onClick={() => console.log("Clicked2")} />
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )}
                </Col>
              </Row>
              </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
