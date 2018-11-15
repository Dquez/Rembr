import articlesReducer from "../reducer_articles";
import {
    FETCH_ARTICLES,
    FAVORITE_ARTICLE,
    BACKLOG_ARTICLE,
    DELETE_ARTICLE
    } from "../../actions";
import _ from "lodash";

const articles = {
    "5bdf3cbac9c86c12773555be": {
            date: "2018-11-04T18:38:50.758Z",
            email: "dariellv7@gmail.com",
            favorited: false,
            note: "Read before applying for positions",
            saveForLater: false,
            tags: ["Tech", "Javascript"],
            title: "ES6",
            url: "https://github.com/DrkSephy/es6-cheatsheet",
            _id: "5bdf3cbac9c86c12773555be"
        },
    "5bdf3cbac9c86c12773555bf": {
            date: "2018-11-04T18:38:50.758Z",
            email: "dariellv7@gmail.com",
            favorited: false,
            note: "Read before applying for positions",
            saveForLater: false,
            tags: ["Tech", "Javascript"],
            title: "JS sorting algorithms",
            url: "http://khan4019.github.io/front-end-Interview-Questions/sort.html#quickSort",
            _id: "5bdf3cbac9c86c12773555bf"
        },
    "5bdf3cbac9c86c12773555c0": {
            date: "2018-11-04T18:38:50.758Z",
            email: "dariellv7@gmail.com",
            favorited: false,
            note: "Possible study material after graduation",
            saveForLater: false,
            tags: [],
            title: "AI nanodegree term one",
            url: "https://medium.com/udacity/ai-nanodegree-program-syllabus-term-1-in-depth-80c41297acaf",
            _id: "5bdf3cbac9c86c12773555c0"
        }
    }
    
it("handles actions of type FETCH_ARTICLES", ()=>{
    const action = {
        type: FETCH_ARTICLES,
        payload :{
            data: articles
        }
    }
    const newState = articlesReducer({}, action);
    expect(newState).toEqual(articles);
})

it("handles actions of type FAVORITE_ARTICLE", ()=>{
    const data = {...articles};
    data["5bdf3cbac9c86c12773555be"].favorited = true;
    const action = {
        type: FAVORITE_ARTICLE,
        payload: {
            data: {
                date: "2018-11-04T18:38:50.758Z",
                email: "dariellv7@gmail.com",
                favorited: true,
                note: "Read before applying for positions",
                saveForLater: false,
                tags: ["Tech", "Javascript"],
                title: "ES6",
                url: "https://github.com/DrkSephy/es6-cheatsheet",
                _id: "5bdf3cbac9c86c12773555be"
            }
        }
    }
    const newState = articlesReducer(articles, action);
    expect(newState).toEqual(data);
    // set articles obj back to true for testing purposes
    articles["5bdf3cbac9c86c12773555be"].favorited = false;
})

it("handles actions of type BACKLOG_ARTICLE", ()=>{
    const data = {...articles};
    data["5bdf3cbac9c86c12773555be"].saveForLater = true;
    const action = {
        type: FAVORITE_ARTICLE,
        payload: {
            data: {
                date: "2018-11-04T18:38:50.758Z",
                email: "dariellv7@gmail.com",
                favorited: false,
                note: "Read before applying for positions",
                saveForLater: true,
                tags: ["Tech", "Javascript"],
                title: "ES6",
                url: "https://github.com/DrkSephy/es6-cheatsheet",
                _id: "5bdf3cbac9c86c12773555be"
            }
        }
    }
    const newState = articlesReducer(articles, action);
    expect(newState).toEqual(data);
})

it("handles actions of type DELETE_ARTICLE", ()=>{
    const data = {...articles};
    const action = {
        type: DELETE_ARTICLE,
        payload:"5bdf3cbac9c86c12773555be"
    }
    const newState = articlesReducer(articles, action);
    expect(newState).toEqual(_.omit(data, action.payload));
})


it("handles action with unknown type", ()=>{
    const newState = articlesReducer({}, {});
    expect(newState).toEqual({})
})