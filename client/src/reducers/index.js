import { combineReducers } from 'redux';
import ArticlesReducer from './reducer_articles';


// link all reducers to a single root reducer, to create the redux store
const rootReducer = combineReducers({
  articles: ArticlesReducer,
});

export default rootReducer;