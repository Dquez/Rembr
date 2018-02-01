const path = require("path");
const router = require("express").Router();




router.post("/login", (req, res) => {
  console.log("LOGIN ROUTE");
  console.log(req.body);
});
// router.post("/api/article", articleFunctions.create)

// router.delete("/api/books/:id", bookFunctions.remove)

// router.get("/api/books/:id", bookFunctions.findById)

// router.patch("/api/books/:id", bookFunctions.update)

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
