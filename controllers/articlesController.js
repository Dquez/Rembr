const path = require("path");
const router = require("express").Router();
const db = require("../models");
const indico = require('indico.io');
indico.apiKey = process.env.INDICO_API_KEY;

const articleFunctions = {
  findAll: function (req, res) {
    db.Article
      .find({email : req.params.email})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function (req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (dbArticle, res) {
    db.Article
      .create(dbArticle)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}

router.get("/api/articles/:email", articleFunctions.findAll);

router.post("/rembrTab", (req, res)=> {
const {email, title, url, note, date} = req.body;

//String of the title, url and note to use the indico machine learning API to parse the data develop text tags for each article or webpage saved
const input = `${title}, ${url}, ${note}`;

indico.text_tags(input, {threshold: 0.08})
  .then(response => {
    const tags = [];
    for(tag in response) {
      if(tag.includes("_")){
        tag.replace("_", " ");
      }
      tags.push(tag);
    }
    const dbArticle = {email, title, url, note, date, tags};
    articleFunctions.create(dbArticle, res);
  })
  .catch(err => console.log(err));
});




// router.post("/api/article", articleFunctions.create)

// router.delete("/api/books/:id", bookFunctions.remove)

// router.get("/api/books/:id", bookFunctions.findById)

// router.patch("/api/books/:id", bookFunctions.update)

// If no API routes are hit, send the React app
/*router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});*/

module.exports = router;
