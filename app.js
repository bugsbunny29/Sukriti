var express=require('express');
var app=express();
var path=require('path');
app.use(express.static('public'));
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname + '/doodle29.html'));
});
app.listen('3030',function(req,res){
	console.log('hi');
});