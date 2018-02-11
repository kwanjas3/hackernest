const mongoose = require('mongoose');
let Schema = mongoose.Schema;

var fishFeedSchema = new Schema({
    "companyName": String,
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


//Defined in initialize;
// let Feed;
let Feed;
let Payload;
// let allFeeds = [];
let db;

module.exports.initialize = function() {
  return new Promise((resolve, reject) => {

    db = mongoose.createConnection(
      "mongodb://jason:jason@ds117605.mlab.com:17605/fishhack"
    );

    db.on('error', ()=>{
        console.log("connection error");
        reject();
    });

    db.once('open', ()=>{
        Feed = db.model("fishfeed", feedSchema);
        resolve();
    });      
    });
};

// get all the data from the database
module.exports.findAll = function() {
    return new Promise((resolve, reject)=>{
        Feed.find()
        .exec()
        .then(result => {
          Payload = JSON.parse(result);
          resolve(Payload);
        })
        .catch(err => {
          reject("error finding data");
        });
    });
}

// // get data for specified company by company name
// module.exports.getCompany = (comp)=>{
//     return new Promise ((resolve, reject)=>{
//         Feed.find({companyName: comp})
//         .exec()
//         .then((data)=>{
//             console.log(data);
//             resolve(data);
//         })
//         .catch((err)=>{
//             console.log(err);
//             reject();
//         });
//     });
// }
