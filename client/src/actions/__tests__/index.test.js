import * as actions from "../index";
import moxios from "moxios"

// let action;
// beforeEach(()=>{
//     action = saveComment("New comment");
// })
let action;
describe("getArticles", ()=>{
    beforeEach(()=>{
        action = actions.getArticles("email@yahoo.com");
    })
    it("has the correct type", ()=>{
        expect(action.type).toEqual(actions.FETCH_ARTICLES);
       
    })
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