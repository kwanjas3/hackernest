const mongoose = require('mongoose');
let db = mongoose.createConnection("mongodb://jason:jason@ds117605.mlab.com:17605/fishhack")

let FeedData = [];

module.exports.getAll = function(){
    return new Promise((resolve, reject)=>{
        FeedData = db.getCollection('fishfeeds').find();
    });
}

console.log(FeedData);