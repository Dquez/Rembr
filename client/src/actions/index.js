import axios from "axios";
// action creators always have to return an action, and actions always have to have a type property
const ROOT_URL = "/api";

// variables to be imported and used in our reducers switch statement, instead of hard coding a string
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const BACKLOG_ARTICLE = 'BACKLOG_ARTICLE';
export const FAVORITE_ARTICLE = 'FAVORITE_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';

// Gets all articles
export function getArticles (email) {
    const request = axios.get(`${ROOT_URL}/articles/${email}`);
    return {
        type: FETCH_ARTICLES,
        payload: request
    }
}





// // Saves an article to the database
// export function saveArticle (articleData) {
//     const request = axios.post(`${ROOT_URL}/articles`, articleData);
//     return {
//         type: SAVE_ARTICLE,
//         payload: request
//     }
// }

// // Deletes the article by the given id
// export function deleteArticle (id) {
//     axios.delete(`${ROOT_URL}/articles/${id}`);
//     return {
//         type: DELETE_ARTICLE,
//         payload: id
//     }
// }


// export default {
//   // Deletes the article with the given id
//   deleteArticle: function (id) {
//     return axios.delete("/api/article/" + id);
//   },
//   // Gets all articles
//   getArticles: function (email) {
//     // const url = `${BASE_URL}/api/articles/${email}`;
//     return axios.get(`api/articles/${email}`, email);
//   },
//   postArticle: function (article) {
//     console.log(article)
//     return axios.post("/login", article);
//   },
//   saveForLater: function (id, decision) {
//     return axios.patch("/api/articles/" + id, {
//       saveForLater: decision
//     });
//   },
//   favoriteArticle: function (id, decision) {
//     console.log(decision);
//     // decision === false ? true : false
//     return axios.patch("/api/favoriteArticle/" + id, {
//       favorited: decision
//     });
//   },
//   addTag: function (id, tag) {
//     return axios.patch("/api/articleTag/" + id, {
//       tags: tag
//     });
//   },
// }