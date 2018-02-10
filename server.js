const express = require('express');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;
const path = require('path')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
// const ds = require('./data-service.js');
const dsGet = require('./data-service-fetch.js');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.engine(".hbs", exphbs({
    extname: ".hbs",
    defaultLayout: 'layout',
    helpers: {
        equal: function (lvalue, rvalue, options) {
            if (arguments.length < 3)
                throw new Error("Handlebars Helper equal needs 2 parameters");
            if (lvalue != rvalue) {
                return options.inverse(this);
            } else {
                return options.fn(this);
            }
        }
    }
}));
app.set("view engine", ".hbs");

app.get("/", (req, res)=>{
    res.render('home', {data: {}});
});

ds.initialize().then(()=>{
    app.listen(HTTP_PORT, ()=>{
        console.log("Listening on " + HTTP_PORT);
    });
});


