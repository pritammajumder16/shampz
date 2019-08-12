var express = require('express');
var routes = require('./controller/routes')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
//app.use('view engine', 'ejs')
app.use(bodyParser.json());

mongoose.connect("mongodb://shampionz:shampionz@16@myfirstdb-shard-00-00-lwmzp.gcp.mongodb.net:27017,myfirstdb-shard-00-01-lwmzp.gcp.mongodb.net:27017,myfirstdb-shard-00-02-lwmzp.gcp.mongodb.net:27017/test?ssl=true&replicaSet=MyFirstDB-shard-0&authSource=admin&retryWrites=true&w=majority");
mongoose.Promise=global.Promise;

app.use('/api',routes);

app.use(function(err,req,res,next){
    res.status(422).send({error: err.message})
})

app.listen(process.env.PORT||3000,function(){
    console.log("listening to port 3000 now")
})
