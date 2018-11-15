import articlesReducer from "../reducer_articles";
import {
    FETCH_ARTICLES,
    FAVORITE_ARTICLE,
    BACKLOG_ARTICLE,
    DELETE_ARTICLE
    } from "../../actions";
import _ from "lodash";

const articles = [
        {
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
       {
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
        {
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
    ]
it("handles actions of type FETCH_ARTICLES", ()=>{
    const action = {
        type: FETCH_ARTICLES,
        payload :{
            data: articles
        }
    }
    const newState = articlesReducer({}, action);
    expect(newState).toEqual(_.mapKeys(articles, "_id"));
})

it("handles actions of type FAVORITE_ARTICLE", ()=>{
    const data = _.mapKeys(articles, "_id");
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
    const newState = articlesReducer(_.mapKeys(articles, "_id"), action);
    expect(newState).toEqual(data);
})

it("handles action with unknown type", ()=>{
    const newState = articlesReducer({}, {});
    expect(newState).toEqual({})
})