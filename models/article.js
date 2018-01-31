const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  username: {type: String},
  title: { type: String, required: true },
  url: { type: String, required: true },
  tags: {type: Array},
  note: {type: String},
  date: { type: Date, default: Date.now() }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
