const router = require("express").Router();
const  {userSchema } = require("../models/users");

router.get("/", (request, response) => {
  userSchema
    .findAll()
    .then(result => response.json(result))
    .catch(err => console.log(err));
});

router.post("/add", (request, response) => {
  userSchema
  .create({username: request.body.username, email: request.body.email})
  .then(response.json({msg: `User created`}))
  .catch(err => console.log(err));
});

module.exports = router;
