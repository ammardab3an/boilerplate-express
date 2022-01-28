var _env = require('dotenv').config();
var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/json", (req, res) => {

    const tmp = {
        "message": "Hello json",
        "env": process.env,
        "_env": _env,
    }

    if(process.env.MESSAGE_STYLE === 'uppercase'){
        tmp.message = tmp.message.toUpperCase();
    }

    res.json(tmp);
})



























 module.exports = app;
