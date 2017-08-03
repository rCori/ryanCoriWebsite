var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require("path");

var app = express();

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/resources/html/index.html'));
});

var server = app.listen(process.env.PORT || 8081, function(){

});
