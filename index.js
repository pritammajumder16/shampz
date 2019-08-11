var express = require('express');
var routes = require('./controller/routes')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
//app.use('view engine', 'ejs')
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://shampionz:shampionz@16@myfirstdb-lwmzp.gcp.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true})
mongoose.Promise=global.Promise;

app.use('/api',routes);

app.use(function(err,req,res,next){
    res.status(422).send({error: err.message})
})

app.listen(process.env.port||3000,function(){
    console.log("listening to port 3000 now")
})