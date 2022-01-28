var _env = require('dotenv').config();
var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/json", (req, res) => {
    
    res.send(JSON.stringify({
        "cwd": process.cwd(),
        "dir": __dirname,
        "_env": _env,
        "env_all": process.env,
        "env": process.env.MESSAGE_STYLE,
    }, null, 4));

    const tmp = {"message": "Hello json"}
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        tmp.message = tmp.message.toUpperCase();
    }

    res.json(tmp);
})



























 module.exports = app;
