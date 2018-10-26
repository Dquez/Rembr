import axios from "axios";
// action creators always have to return an action, and actions always have to have a type property
const ROOT_URL = "/api";

// variables to be imported and used in our reducers switch statement, instead of hard coding a string
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const BACKLOG_ARTICLE = 'BACKLOG_ARTICLE';
export const FAVORITE_ARTICLE = 'FAVORITE_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const ADD_TAG = 'ADD_TAG';
export const POST_ARTICLE = 'POST_ARTICLE'

// Gets all articles
export function getArticles (email) {
    const request = axios.get(`${ROOT_URL}/articles/${email}`);
    
    return {
        type: FETCH_ARTICLES,
        payload: request
    }
}



// export function deleteArticle (id) {
//     axios.delete(`${ROOT_URL}/articles/${id}`);
//     return {
//         type: DELETE_ARTICLE,
//         payload: id
//     }
// }

// export function saveForLater (id, decision) {
//     const request = axios.patch("/api/articles/" + id, {
//       saveForLater: decision
//     });
//     return {
//         type: BACKLOG_ARTICLE,
//         payload: request
//     }
// }

// export function favoriteArticle (id, decision) {
//     const request = axios.patch("/api/favoriteArticle/" + id, {
//         favorited: decision
//       });
//     return {
//         type: FAVORITE_ARTICLE,
//         payload: request
//     }
// }

// export function addTag (id, tag) {
//     const request = axios.patch("/api/articleTag/" + id, {
//         tags: tag
//       });
//     return {
//         type: ADD_TAG,
//         payload: request
//     }
// }

// export function postArticle (article) {
//     const request = axios.post("/login", article);
//     return {
//         type: POST_ARTICLE,
//         payload: request
//     }
// }
