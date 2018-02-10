const mongoose = require('mongoose');
let Schema = mongoose.Schema;

var fishFeedSchema = new Schema({


});


let FishFeed;

module.exports.initialize = () => {
    return new Promise ((resolve, reject)=>{
        let db = mongoose.createConnection("mongodb://jason:jason@ds117605.mlab.com:17605/fishhack");
        db.on('error', (err)=>{
            reject(err);
        });

        db.once('open', ()=>{
            FishFeed = db.model("fishfeed", fishFeedSchema);
            resolve();
        });
    });
};