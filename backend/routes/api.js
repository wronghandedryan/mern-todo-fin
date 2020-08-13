const router = require("express").Router();

router.post("./Todo", function(req, res) {
  res.json({id: 123})
});

module.exports = apiRouter;