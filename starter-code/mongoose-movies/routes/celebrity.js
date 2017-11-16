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


router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities", (req, res, next) => {
  const theCeleb = new CelebrityModel({
    name: req.body.celebName,
    occupation: req.body.celebOccupation,
    catchPhrase: req.body.celebPhrase
  });
  theCeleb.save()
  .then(() => {
    res.redirect("/celebrities");
  })
  .catch(err => {
    next(err);
  });
});


router.get("/celebrities/:id", (req, res, next) => {

  CelebrityModel
  .findById(req.params.id)
  .then( productFromDb => {

    res.locals.celebrityDetails = productFromDb;
    return CelebrityModel.find({ product: req.params.prodId }).exec();
  })
  .then( celebrityResults => {
    res.locals.listOfCelebrities = celebrityResults;
    res.render("celebrities/show");
  })
  .catch(err => {

    next(err);
  });
});
router.post("/celebrities/:id/delete", (req, res, next) => {
    CelebrityModel.findByIdAndRemove(req.params.id)
  .then(productFromDb =>{
    res.redirect("/celebrities");
  })
  .catch(err => {
    next(err);
  });
});


module.exports = router;
