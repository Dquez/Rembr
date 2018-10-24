import {FETCH_ARTICLES, BACKLOG_ARTICLE, FAVORITE_ARTICLE, DELETE_ARTICLE} from "../actions";
import _ from "lodash";
// state argument is not application state, only the state this reduce is responsible for
export default function (state = {}, action) {
    switch(action.type){
        case FETCH_ARTICLES:
            console.log(action.payload.data);
            // set up an object of objects, in which the keys("id") correspond to each "article" object
            return _.mapKeys(action.payload.data, "_id");
        case FAVORITE_ARTICLE:
            return {...state, [action.payload.data._id]: action.payload.data};
        case BACKLOG_ARTICLE:
            return state;
        case DELETE_ARTICLE:
            return state;
        default:
            return state;
    }
}