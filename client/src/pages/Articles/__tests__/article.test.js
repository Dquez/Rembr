import React from "react";
import {mount} from "enzyme";
import moxios from "moxios";
import Root from "../../../Root";
import Articles from "../Articles";
import App from "../../../App";
import { MemoryRouter } from 'react-router-dom';

let wrapper;

beforeEach(()=>{
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
    const initialState = {
        articles: response
    }

    wrapper = mount(
        <MemoryRouter>
            <Root initialState={initialState}>
                <Articles/>
            </Root>
         </MemoryRouter>
    )
});


it("can display a list of articles from redux store and display one LI per article", (done)=>{
    wrapper.find(Articles).children().setState({isLoggedIn:true});
    expect(wrapper.find(".list-group-item").length).toEqual(3);
    done();
    wrapper.unmount()
})

    // moxios.install();
    // moxios.stubRequest("/api/articles/dariellv7@gmail.com", {
    // status: 200,
    // response
    // })
    // moxios.uninstall();
    // moxios.wait(()=> {
    // wrapper.update();
     // })    