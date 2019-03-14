# Rembr

![Rembr Chrome Extension](https://media.giphy.com/media/3tGUl8GqYFBojtmfEV/giphy.gif)

Rembr is a MERN-redux, single-page web application for people who are tired of slowing down their computers with countless tabs and browsers open. Rembr's utility lies in the accompanying Chrome extension that saves a page's URL, a custom title, and a note to remember why you saved the page in the first place. The extension and access to the web app free of charge, the only thing required is a Gmail account so you can log in to the chrome extension and web app using the same email. Once you're logged in, save your webpage using the extension for later reading and then visit the web application when you're ready to read or organize your saved pages. An intuitive, personalized bookmarking system.

### [Rembr](https://rembr-app.herokuapp.com/) deployed on heroku

![Rembr Web Application](https://media.giphy.com/media/1XhtZPa4a7e4DaaReV/giphy.gif)

## Built With

* [auth0](https://www.npmjs.com/package/auth0-js) - Client Side Javascript toolkit for Auth0 API, authentication service
* [axios](https://www.npmjs.com/package/axios) - Make XMLHttpRequests from the browser
* [body-parser](https://www.npmjs.com/package/body-parser) - Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
* [bootstrap](https://getbootstrap.com/) - Front-end framework for styling
* [chrome extension](https://developer.chrome.com/extensions/devguide) - Has access to HTML5, JSON, Chrome-specific APIs 
* [docker](https://www.docker.com) - Packaged Software into Standardized Units for Development, Shipment and Deployment
* [enzyme](https://airbnb.io/enzyme/) - Enzyme is a JavaScript Testing utility for React
* [express](https://www.npmjs.com/package/express) - Framework we used to handle HTTP requests
* [indico.io](https://www.npmjs.com/package/indico.io) - Artificial Intelligence APIs, Text Tagging used in this web app
* [jest](https://jestjs.io/) - Front-end JavaScript testing library with little configuration required. 
* [jQuery](https://jquery.com/) - Front-end JavaScript library. 
* [mongoose](https://www.npmjs.com/package/mongoose) Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
* [nodemon](https://www.npmjs.com/package/nodemon) - Watches the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.
* [react](https://reactjs.org/) - A JavaScript library for building component-based user interfaces
* [react-router-dom](https://www.npmjs.com/package/react-router) - Enables client-side routing and component rendering
* [redux](https://redux.js.org/) - Enables client-side predictable state containers
* [travis-ci](https://travis-ci.org) - Travis CI is a hosted, distributed continuous integration service used to build and test software projects hosted at GitHub.


## Inspiration
As any web developer will tell you, we love having multiple tabs open. Even if we don't intend on using the content of the tab for days, weeks, *or months*, we keep them open for that one time we might need the content on hand. This slows down your browser, prevents you from restarting your computer in fear of losing your precious tabs (*although with modern browsers, on restart, the browser will ask you to restore your tabs*). I wanted a way to avoid this pain point, without cluttering up my bookmarks with random web pages. *Fun fact* : During production, my active browser window alone had 27 tabs open that I just couldn't let go of. 

## How I built it
Before I began coding out the app, I wireframed everything from the HTML page that pops up from the extension to the login and signup page. Mapping the structure of this app helped modularize all of my files in an MVC format and into reusable react components where applicable. My process:
 * Wireframes
 * Node-express server with MongoDB and front-end boilerplate code for React
 * Chrome extension to get XMLHTTP requests sending to the server.
 * Authentication for the chrome extension first (to have an email to associate the data with)
 * Authentication for the client-side web app.
 * Web designing, documentation
 * Hooked up application to Redux
 * Added testing with Jest/Enzyme
The front-end for the web app is built with react, redux, react-router, and bootstrap. The backend is built with a node server, express framework, and MongoDB as a database. The extension uses HTML, bootstrap, and jquery/javascript.

## Challenges I ran into
Before serious development even started, I knew I had to get ready to read the [chrome extension](https://developer.chrome.com/extensions/devguide) documentation. At first, the process of using background pages and content scripts seemed obscure but after reading through the docs, looking at examples, I was able to hone into exactly what my app needed. Some of the other *minor* issues I ran into along the way :
* Develop a meaningful and original idea that solves a pain point that either I or the developer community face
* Hooking up auth0 authentication for both the extension and the web app so users have access to their private data and it's secured. 
* Developers available: as the sole developer for this app, my full-stack abilities were stretched to their limits as I tried to incorporate all functioning components into a polished web application. 

## Accomplishments that I'm proud of
That being said, working on the entire app, from start to finish, including design specs, was immensely gratifying. Also, learning a new technology, Google's [chrome extension](https://developer.chrome.com/extensions/devguide), proved to be a major boost in my confidence as a developer. Seamlessly including third party API's like particles-js and [indico.io](https://www.npmjs.com/package/indico.io) was also a great accomplishment.

<img src="http://res.cloudinary.com/dquez/image/upload/v1521158262/Screen_Shot_2018-03-14_at_8.58.06_PM_y5hncw.png"/>

## What I learned
I learned how beneficial wireframing and brainstorming are before any major project. I also followed git version control best practices (checking out to a separate branch, not pushing to master), but more importantly, I followed a workflow developed on Trello. I was able to quantify my progress by checking back with the goals I set out at the start of the project. The goals and expectations mutated as the project went on but I was always able to work towards an MVP with key pieces in mind that I needed to incorporate.


## What's next for Rembr
I'd like to scale this app so it's more widely available and optimized if a large audience adapts the app into their daily lives. I'd also like to include a predictive modeling algorithm to let the user know of other articles they might be interested in. Lastly, I'd like to upload the DOM content of each saved article so the user can view their pages directly on Rembr, instead of opening on the web page in a new tab (*for those who want 100% departure from clutter*)

## Author

- [Dariell Vasquez](https://github.com/Dquez)
