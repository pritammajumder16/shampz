const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
    username:{
        type: String,
        required:[true,'User Name is required']
    },
    password:{
        type: String,
        required:[true,'Password is required']
    }
});

const user = mongoose.model('users',Schema);
module.exports=user;