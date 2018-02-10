const mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.createConnection("mongodb://hojung:hojung@ds117605.mlab.com:17605/fishhack");

var feedSchema = new Schema({
    "productName": String,
    "feedType": [{
        "friedMash": String,
        "starter": String,
        "grower": String,
        "Finisher": String
    }],
    "shapeSize": [{
        "mash": String,
        "crumble": String,
        "pellet": String,
        "pelletSize": String
    }],
    "fishWeight": [String],
    "composition": {
        "vitamin": [String],
        "protein": [String],
        "fat": [String],
        "fiber": [String],
        "mineral":[String]
    },
    "ingredient":[String],
    "packaging": [String],
    "price": Number
});

var Feed = mongoose.model("Feed", feedSchema);

var abcFeed = new Feed({
    "productName": "ABC Feed",
    "feedType": ["Mash", "Pallete"],
    "shapeSize": ["0.1", "1"],
    "fishWeight": ["100", "110"],
    "composition":{
        "vitamin": ["D", "A", "C"],
        "protein": ["whey"],
        "fat": ["trans"],
        "fiber": ["fiber1", "fiber2"],
        "mineral": ["iron", "zinc"]
    },
    "ingredient": ["fish", "food", "something"],
    "packaging": ["50", "100", "150"],
    "price": 100
});



module.exports.initialize = function() {
    return new Promise((resolve, reject)=>{
        abcFeed.save((err)=>{
            if(err){
                console.log(err);
            } else {
                console.log("abcFeed Saved");
            }
            process.exit();
        });
        resolve();
    });
}