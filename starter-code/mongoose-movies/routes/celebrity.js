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

// ------------------------------
// router.get("/products/:prodId", (req, res, next) => {
//     //      /products/ 9999
//     //                   |
//     //      req.params.prodId
//     // ProductModel.findOne({ _id: req.params.prodId })
//     ProductModel.findById(req.params.prodId)
//       .then((productFromDb) => {
//           // create a local variable for the view to access the DB result
//           res.locals.productDetails = productFromDb;
//
//           // now retrieve the reviews from the database
//           // (return the promise of the next database operation)
//           return ReviewModel.find({ product: req.params.prodId }).exec();
//       })
//       .then((reviewResults) => {
//           res.locals.listOfReviews = reviewResults;
//
//           res.render("product-views/product-details");
//       })
//       .catch((err) => {
//           // render the error page with our error
//           next(err);
//       });
// }); // GET /products/:prodId
//
//
//

module.exports = router;
