var express = (require('express'))
var router = express.Router();
var user= require('../models/usermodel')

router.get('/users',function(req, res, next){
    user.find({}).then(function(data){
        res.send(data);
    })
});
router.post('/users',function(req, res, next){
    user.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
});
router.put('/users/:id',function(req, res, next){
    user.findByIdAndUpdate({_id:req.params.id},req.body).then(function(data1){
        user.findOne({_id: req.params.id}).then(function(data2){
            res.send(data2);
        })
    });
});
router.delete('/users/:id',function(req, res, next){
    user.findByIdAndRemove({_id:req.params.id}).then(function(data){
        res.send(data);
    });
});

module.exports=router;