const router = require("express").Router();

router.get("/", (request, response) => {
  response.send("All Users");
});

router.post("/add", (request, response) => {
  response.send("Add user");
});

module.exports = router;
