import axios from "axios";

export default {
  // Gets all books
  getArticles: function () {
    return axios.get("/api/articles");
  },
  postArticle: function(article) {
    console.log(article)
    return axios.post("/login", article);
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
};