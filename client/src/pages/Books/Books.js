import React from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import {getUserInfo} from '../../utils/AuthService'; 
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
    return (
      <Container fluid>
        <Row>
          <Col style="side-bar" size="md-3">
            <Nav>


            </Nav>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Articles on my list</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => {
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
        </Row>
      </Container>
    );
  }
}

export default Books;
