const express = require("express");

const CelebrityModel = require("../models/celebrity");

const router = express.Router();

router.get("/celebrities", (req, res, err) => {
  CelebrityModel.find()
  .then(() => {
    res.render("celebrities/index");
  })
  .catch( err => {
    next(err);
  });
});





module.exports = router;
