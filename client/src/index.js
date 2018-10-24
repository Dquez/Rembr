import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

// create a single Redux store, with Redux Proimse acting as a gatekeeper for when a payload is attached to a action, it will handle asychronous calls so that payloads are returned after they finish loading their data
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    // data returned from reducers acts as redux store
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>
    , document.getElementById("root"));
