// const path = require("path");
// const router = require("express").Router();
// const indico = require('indico.io');
// indico.apiKey = process.env.INDICO_API_KEY;

// // single example
// indico.sentiment("I love writing code!")
//   .then(response => {
//     console.log(response);
//   })
//   .catch(logError);

// // batch example
// const batchInput = [
//   "https://medium.com/@osanseviero/artificial-intelligence-nanodegree-review-9ac4a697f57f",
//   "https://cdnjs.com/libraries/jquery/"
// ];

// indico.text_tags(batchInput, {threshold: 0.05})
//   .then(response => {
//     console.log("First")
//     console.log(response);
//   })
//   .catch(logError);


// // router.post("/login", (req, res) => {
// //   console.log("LOGIN ROUTE");
// //   console.log(req.body);
// //   res.send("Message receieved");
// // });
// // router.post("/api/article", articleFunctions.create)

// // router.delete("/api/books/:id", bookFunctions.remove)

// // router.get("/api/books/:id", bookFunctions.findById)

// // router.patch("/api/books/:id", bookFunctions.update)

// // If no API routes are hit, send the React app
// router.use(function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// module.exports = router;
