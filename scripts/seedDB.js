const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/rembr",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    title: "ES6",
    url: "https://github.com/DrkSephy/es6-cheatsheet",
    tags: ["Tech", "Javascript"],
    note: "Read before applying for positions",
    date: new Date(Date.now())
  },
  {
    title: "JS sorting algorithms",
    url: "http://khan4019.github.io/front-end-Interview-Questions/sort.html#quickSort",
    tags: ["Tech", "Javascript"],
    note: "Read before applying for positions",
    date: new Date(Date.now())
  },
  {
    title: "AI nanodegree term one",
    url: "https://medium.com/udacity/ai-nanodegree-program-syllabus-term-1-in-depth-80c41297acaf",
    tags: ["Tech", "AI"],
    note: "Possible study material after graduation",
    date: new Date(Date.now())
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
