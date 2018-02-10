const mongoose = require('mongoose');
var Schema = mongoose.Schema;

let connectDB = mongoose.createConnection("mongodb://hojung:hojung@ds117605.mlab.com:17605/fishhack");

var feedSchema = new Schema({
    "productName": String,
    "feedType": [],
    "shapeSize": [],
    "fishWeight": [],
    "composition": {
        "vitamin": [],
        "protein": [],
        "fat": [],
        "fiber": [],
        "mineral":[]
    },
    "ingredient":[],
    "packaging": [],
    "price": Number
});

var Feed = mongoose.model("fishfeed", feedSchema);

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

abcFeed.save((err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("abcFeed Saved");
    }
    process.exit();
});