var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://jason:jason@ds117605.mlab.com:17605/fishhack");
var feedSchema = new Schema({
  "productName":  String,
  "feedType":[{
      "friedmash": String,
      "starter": String,
      "grower": String,
      "finisher": String
    }],
  "shapeSize": [{
      "mash": String,
      "crumble": String,
      "pellet": String,
      "pelletSize": String
  }],
  "fishWeight": String,
  "composition": [{
     "dryMatmin": String,
     "proteinMin": String,
     "fatMin": String,
     "fiberMax": String,
     "ashMax": String
  }],
  "ingredient": String,
  "packagingKg":String,
  "price": String

});
// register the Company model using the companySchema
var Feed = mongoose.model("fishfeed", feedSchema);

// create a new company
var abcFeed = new Feed({
  productName: "The Kwik-E-Mart",
  feedType: [{
      friedmash: "Fried mash",
      starter: "Starter",
      grower: "Grower",
      finisher: "Finisher"
    }],
  shapeSize:[{
      mash: "mash",
      crumble: "Crumble",
      pellet: "Pellet",
      pelletSize: "PelletSize"
  }],
  fishWeight:"123",
  composition: [{
      dryMatmin:"dryMatmin",
      fatMin:"fatMin",
      fiberMax:"fiberMax",
      ashMax:"ashMax"
  }],
  ingredient:"ingredient",
  packagingKg:"packagingKg",
  price:"price"
});

// save the company
abcFeed.save((err) => {
  if(err) {
    console.log("There was an error saving the Kwik-E-Mart company");
  } else {
    console.log("saved");
  }
  // exit the program after saving
  process.exit();
});