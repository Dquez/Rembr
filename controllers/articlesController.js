const path = require("path");
const router = require("express").Router();
const db = require("../models");
const authCheck = require("../server");
const articleFunctions = {
  findAll: function (req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Article
      .create(req.body)
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

router.get("/api/articles", authCheck, articleFunctions.findAll)

router.post("/login", articleFunctions.create);

// router.post("/api/article", articleFunctions.create)

// router.delete("/api/books/:id", bookFunctions.remove)

// router.get("/api/books/:id", bookFunctions.findById)

// router.patch("/api/books/:id", bookFunctions.update)

// If no API routes are hit, send the React app
/*router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});*/

module.exports = router;
