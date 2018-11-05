import React from "react";
import {mount} from "enzyme";
import moxios from "moxios";
import Root from "../../../Root";
// import Articles from "../Articles";
import App from "../../../App";
import { MemoryRouter } from 'react-router-dom';

let wrapped;
beforeEach(()=>{
    moxios.install();
    const response = {
        "5bdf3cbac9c86c12773555be" : {
            date: "2018-11-04T18:38:50.758Z",
            email: "dariellv7@gmail.com",
            favorited: true,
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
    
    moxios.stubRequest("/api/articles/:email", {
    status: 200,
    response
    })
} 

);
afterEach(()=>{
    moxios.uninstall();
});

it("can fetch a list of articles and display one LI per article", (done)=>{
    wrapped = mount(
        <MemoryRouter>
            <Root>
                <App />
            </Root>
        </MemoryRouter>
    )
    moxios.wait(()=> {
        wrapped.update();
        console.log(wrapped.html())
        expect(wrapped.find(".list-group-item").length).toEqual(3);
        done();
        wrapped.unmount()
    })    
})