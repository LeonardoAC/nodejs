/* 18/04/2017 */
var express = require('express');
var app     = express();
var fs      = require("fs");

app.get('/listNews', function(fromClient, toClient){
    fs.readFile(__dirname + "/" + "news.json", "utf8", function(err, data){
        console.log(data);
        toClient.end(data);
    })
});

app.get('/listNews2', function(fromClient, toClient){
    fs.readFile(__dirname + "/" + "news2.json", "utf8", function(err, data){
        console.log(data);
        toClient.end(data);
    })
});

var server = app.listen(8081, function(){
        var host = server.address().address;
        var port = server.address().port;
        console.log("rodando", host, port);
});