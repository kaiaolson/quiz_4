var express = require('express'),
    router = express.Router(),
    Company = require("../models/company");


router.get("/new", function(req, res, next){
  res.render("companies/new", {errors: []});
});

router.post("/", function(req, res, next){
  var company = new Company({name: req.body.name});
  var newProducts = req.body.products.split(", ");
  for(var i = 0; i < newProducts.length; i++){
    company.products.push({ name: newProducts[i] });
  }
  company.save(function(err, company){
    if(err) {
      res.render("companies/new", {errors: err.errors});
    } else {
      res.redirect("companies/" + company._id);
    }
  });
});

router.get("/", function(req, res, next){
  Company.find(function(err, companies){
    if(err){
      res.render("error", {message: "companies not found!",
                          error: 404});
    } else {
      res.status(200).json({companies: companies});
    }
  });
});

router.get("/:id", function(req, res){
  Company.findOne({_id: req.params.id}, function(err, company){
    if(err) {
      res.render("error", {message: "Company not found!",
                           error: {status: 404}});
    } else {
      res.render("companies/show", {company: company});
      // res.status(200).json({company: company});
    }
  });
});

router.delete("/:id", function(req, res){
  Company.remove({_id: req.params.id}, function(err, company){
    if(err){
      res.render("/companies/" + company._id, {errors: err.errors, company: company});
    } else {
      res.redirect("/companies");
    }
  });
});

module.exports = router;
