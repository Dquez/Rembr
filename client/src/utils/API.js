import axios from "axios";
import { getAccessToken } from './AuthService';

// const BASE_URL = "https://rembr-app.herokuapp.com/";
// const BASE_URL = "http://localhost:3000";

export default {
  // Gets all books
  getArticles: function (email) {
    // const url = `${BASE_URL}/api/articles/${email}`;
    return axios.get(`api/articles/${email}`, email);
  },
  postArticle: function(article) {
    console.log(article)
    return axios.post("/login", article);
  }
}


  // // Deletes the book with the given id
  // deleteBook: function (id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function (bookData) {
  //   return axios.post("/api/books", bookData);
  // },
  // // Gets the book with the given id
  // getBook: function (id) {
  //   return axios.get("/api/books/" + id);
  // },
  // patchBook: function (id, bookData) {
  //   return axios.patch("/api/books/" + id, bookData);
  // },

