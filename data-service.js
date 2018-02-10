const mongoose = require('mongoose');
let Schema = mongoose.Schema;

var fishFeedSchema = new Schema({
    "company": String,
    "fishSpecies": String,
    "productName": String,
    "feedType": String, 
    "shapeSize": String,
    "fishWeight": String,
    "drymatmin": String,
    "proteinmin": String,
    "fatmin": String,
    "fibermax": String,
    "ashmax": String,
    "ingredient": String,
    "packagingKg": String,
    "priceKgUSD": String
});


let FishFeed;

module.exports.initialize = () => {
    return new Promise((resolve, reject) => {
        let db = mongoose.createConnection("mongodb://jason:jason@ds117605.mlab.com:17605/fishhack");
        db.on('error', (err) => {
            reject(err);
        });

        db.once('open', () => {
            FishFeed = db.model("fishfeed", fishFeedSchema);
            resolve();
        });
    });
};