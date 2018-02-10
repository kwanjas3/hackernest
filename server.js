const express = require('express');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.listen(HTTP_PORT, ()=>{
    console.log("Listening on " + HTTP_PORT);
})

app.get("/", (req, res)=>{
    res.send("Hello");
})