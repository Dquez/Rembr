import * as actions from "../index";
import moxios from "moxios"

// let action;
// beforeEach(()=>{
//     action = saveComment("New comment");
// })
let action;
const articles = {
    "5bdf3cbac9c86c12773555be" : {
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
describe("getArticles", ()=>{
    beforeEach(()=>{
        action = actions.getArticles("email@yahoo.com");
    })
    it("has the correct type", ()=>{
        expect(action.type).toEqual(actions.FETCH_ARTICLES);
       
    })
    moxios.install();
    moxios.stubRequest("/api/articles/:email", {
        status: 200,
        response: articles
    })
    it("has the correct payload", ()=>{
        moxios.wait(()=> {
            expect(action.payload.keys().length).toEqual(3);
            done();
            moxios.uninstall();
        })         
        
    })
})

describe("deleteArticle", ()=>{
    beforeEach(()=>{
        action = actions.deleteArticle("5bdf3cbac9c86c12773555be");
    })
    it("has the correct type", ()=>{
        expect(action.type).toEqual(actions.DELETE_ARTICLE);
    })
    moxios.install();
    moxios.stubRequest("api/article/5bdf3cbac9c86c12773555be", {
        status: 200,
        response: "5bdf3cbac9c86c12773555be"
    })
    it("has the correct payload", ()=>{
        moxios.wait(()=> {
            expect(action.payload).toEqual("5bdf3cbac9c86c12773555be");
            done();
            moxios.uninstall();
        })         
        
    })
})

describe("saveForLater", ()=>{
    beforeEach(()=>{
        action = actions.saveForLater("5bdf3cbac9c86c12773555be", true);
    })
    it("has the correct type", ()=>{
        expect(action.type).toEqual(actions.BACKLOG_ARTICLE);
    })
    articles["5bdf3cbac9c86c12773555be"].saveForLater = true;
    moxios.install();
    moxios.stubRequest("api/articles/5bdf3cbac9c86c12773555be", {
        status: 200,
        response: articles
    })
    it("has the correct payload", ()=>{
        moxios.wait(()=> {
            expect(action.payload).toEqual(articles);
            done();
            moxios.uninstall();
        })         
        
    })
})