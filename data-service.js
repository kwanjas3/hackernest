var mongoose = require("mongoose");
var Schema = mongoose.Schema;

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

//Defined in initialize;
let Feed;

module.exports.initialize = function() {
    console.log("Initializing...");
    return new Promise((resolve, reject)=>{
        let db = mongoose.createConnection("mongodb://jason:jason@ds117605.mlab.com:17605/fishhack");
        db.on('error', (err) => {
            reject(err);
        });

        db.once('open', () => {
            Feed = db.model("fishfeed", feedSchema);
            resolve();
        });
    });
}