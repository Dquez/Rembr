import { combineReducers } from 'redux';
import ArticlesReducer from './reducer_articles';
import KeywordArticlesReducer from './reducer_keyword_articles';


// link all reducers to a single root reducer, to create the redux store
const rootReducer = combineReducers({
  articles: ArticlesReducer,
  keywordArticles: KeywordArticlesReducer
});

export default rootReducer;
