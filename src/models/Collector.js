

const mongoose = require('mongoose');

const CollectorSchema=new mongoose.Schema({
    email: String,
    password: String,
    password_hash: String,
    name: String,
    cpf: Number,
    id: Number,


});

module.exports=mongoose.model('Collector', CollectorSchema);