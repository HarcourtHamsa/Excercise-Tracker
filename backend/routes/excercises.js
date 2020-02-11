const router = require("express").Router();

router.get("/", (request, response) => {
  response.send("All Excercises");
});

router.post("/add", (request, response) => {
  response.send("Add Excercise");
});

module.exports = router;
