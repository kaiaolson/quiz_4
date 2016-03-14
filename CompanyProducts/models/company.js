var mongoose = require("mongoose"),
    Schema   = mongoose.Schema;

var Products = new Schema({
  name: String
});

var CompanySchema = new Schema({
  name: {type: String, required: true},
  products: [Products]
});

module.exports = mongoose.model("Company", CompanySchema);
