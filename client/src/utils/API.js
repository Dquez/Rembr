import axios from "axios";

export default {
  // Gets all books
  getArticles: function (email) {
    // const url = `${BASE_URL}/api/articles/${email}`;
    return axios.get(`api/articles/${email}`, email);
  },
  postArticle: function(article) {
    console.log(article)
    return axios.post("/login", article);
  },
  saveForLater: function (id, decision) {
    return axios.patch("/api/articles/" + id, {saveForLater: decision});
  },
  favoriteArticle: function (id, decision) {
    return axios.patch("/api/favoriteArticle/" + id, {favorited: decision});
  },
  
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

