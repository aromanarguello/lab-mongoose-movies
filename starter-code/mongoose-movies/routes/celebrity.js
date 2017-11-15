const express = require("express");

const CelebrityModel = require("../models/celebrity");

const router = express.Router();

router.get("/celebrities", (req, res, next) => {
  CelebrityModel
  .find()
  .exec()
  .then( celebrityResults => {
    res.locals.listOfCelebrities = celebrityResults;
    res.render("celebrities/index");
  })
  .catch( err => {
     next(err);
  });
});

router.get("/celebrities/:id", (req, res, next) => {
  console.log(req.query.id);
  CelebrityModel
  .findById(req.query.id)
  .then( celebFromDb => {
    res.locals.celebDetails = celebFromDb;
    res.render("celebrities/show");
  })
  .catch( err => {
    next(err);
  });
});





module.exports = router;
