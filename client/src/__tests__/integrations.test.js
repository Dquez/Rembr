import React from "react";
import {mount} from "enzyme";
import Root from "../Root";
import Articles from "../pages/Articles";
import { MemoryRouter } from 'react-router-dom';
import _ from "lodash";
import moxios from "moxios";

let wrapper;
let articles;
beforeEach(()=>{
    articles = {
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
    const initialState = {articles}

    wrapper = mount(
        <MemoryRouter>
            <Root initialState={initialState}>
                <Articles/>
            </Root>
         </MemoryRouter>
    )
});

describe("articlePage component", ()=>{
    it("can display a list of articles from redux store and display one LI per article", (done)=>{
        wrapper.find(Articles).children().setState({isLoggedIn:true});
        expect(wrapper.find(".list-group-item").length).toEqual(3);
        done();
        wrapper.unmount()
    })
    it("can remove an article when delete button is clicked", (done)=>{
        // When button is clicked, it sends a delete request to the server, so we have to stub out that request from the jsdom and also make our code work with asynchronouse rendering, which is why we use moxios.wait
        moxios.install();
        moxios.stubRequest("/api/article/:id", {
            status: 200,
            response: _.omit(articles, "5bdf3cbac9c86c12773555be")
        })

        wrapper.find(Articles).children().setState({isLoggedIn:true});
        wrapper.find(".delete-btn").at(0).simulate("click");
        moxios.wait(()=> {
            wrapper.update();
            expect(wrapper.find(".list-group-item").length).toEqual(2);
            done();
            wrapper.unmount()
            moxios.uninstall();
        })         
    })
})