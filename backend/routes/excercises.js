const router = require("express").Router();
const { excerciseSchema } = require("../models/excercise");

router.get("/", (request, response) => {
  excerciseSchema
    .findAll()
    .then(result => response.json(result))
    .catch(err => console.log(err));
});

router.post("/add", (request, response) => {
  excerciseSchema
    .create({
      duration: request.body.duration,
      desciption: request.body.description,
      date: request.body.date
    })
    .then(result => response.json(result))
    .catch(err => console.log(err));
});

router.delete("/delete/:id", (request, response) => {
  const userId = request.params.id;
  const allUsers = excerciseSchema.findAll();
  const found = allUsers.some(user => userId === user.id);
  if (found) {
    excerciseSchema
      .destroy({
        where: {
          id: userId
        }
      })
      .then(response.json({ msg: "User deleted!" }))
      .catch(err => console.log(err));
  }
  response.json({ msg: "User not found!" });
});

module.exports = router;
