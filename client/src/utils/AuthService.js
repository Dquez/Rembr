import decode from 'jwt-decode';
import { browserHistory } from 'react-router';
import auth0 from 'auth0-js';

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';
const CLIENT_DOMAIN = 'rembr-app.auth0.com';
const CLIENT_ID = 'F3bv6-7PmyBo-GCCxiyewVN_Yf-CPOlg';
const REDIRECT = 'https://rembr-app.herokuapp.com/callback';
// const REDIRECT = 'http://localhost:8080/callback';
const SCOPE = 'openid profile email';
const AUDIENCE = 'https://rembr-app.auth0.com/api/v2/';

let auth = new auth0.WebAuth({
    clientID: CLIENT_ID,
    domain: CLIENT_DOMAIN
});

export function login() {
  auth.authorize({
    responseType: 'token id_token',
    redirectUri: REDIRECT,
    audience: AUDIENCE,
    scope: SCOPE
  });
}

export function getUserInfo(callback) {
    try {
        auth.client.userInfo(getAccessToken(), function (err, user) {
            try {
                callback(user.email)
            }
            catch(err) {
                console.log(err);
            }
        });
      }
      catch(error) {
        // console.log(error);
      }
}


export function logout() {
    clearIdToken();
    clearAccessToken();
    localStorage.removeItem('expires_at');
    browserHistory.push('/');
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({pathname: '/'});
  }
}

export function getIdToken() {
    return localStorage.getItem(ID_TOKEN_KEY);
  }
  
  export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  function clearIdToken() {
    localStorage.removeItem(ID_TOKEN_KEY);
  }
  
  function clearAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
    let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get and store access_token in local storage
export function setAccessToken() {
    let accessToken = getParameterByName('access_token');
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

  export function setIdToken() {
  let idToken = getParameterByName('id_token');
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function isLoggedIn() {
    const idToken = getIdToken();
    return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
    try {
        const token = decode(encodedToken);
        if (!token.exp) {
            return null;
        }

        const date = new Date(0);
        date.setUTCSeconds(token.exp);
        return date;
    } catch (err) {
        console.log(err)
    }
}

function isTokenExpired(token) {
    const expirationDate = getTokenExpirationDate(token);
    return expirationDate < new Date();
}