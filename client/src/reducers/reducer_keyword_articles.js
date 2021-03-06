import {KEYWORD_SEARCH} from '../actions';
import _ from 'lodash';
// state argument is not application state, only the state this reduce is responsible for
export default function (state = {}, action) {
    switch(action.type){
        case KEYWORD_SEARCH:
            return keywordSearch(action.payload, action.keyword);
        default:
            return state;
    }
}

// function to search for a specific article via keyword, including url, title or note
function keywordSearch (articles, keyword) {
        // if user deleted the keyword, no articles are shown
        if (!keyword) return [];

        // first, we concatenate and parse the articles to use the built in .includes() method on all the data
        const filteredStrings = _.map(articles, article => {
                const stringToParse = `${article.title} ${article.url} ${article.note} ${[...article.tags]} ?/*${article._id}`
                return stringToParse;
            })
            .filter(articleParsed => {
                // filter out the articles that include the kewyword, toLowerCase() will normalize the search parameters
                articleParsed.toLowerCase();
                return articleParsed.includes(keyword.toLowerCase());
            })
        // make a new array of the IDs we will use to extract the correct articles, arbitrary characters used to split to make it easy to parse the Id from the string
        const filteredIds = filteredStrings.map(article => article.split('?/*')[1]);
        // filter out the articles which have an Id equal to the Id from the above array, filteredIds
        return _.filter(articles, filteredArticle => {
            // this anonymous IIFE is required to return from the outer arrow function, otherwise there's a lint error
            return (() => {
                for (let i = 0; i < filteredIds.length; i++) {
                    if (filteredArticle._id === filteredIds[i]) {
                        return filteredArticle;
                    }
                }
            })()
        })
}
