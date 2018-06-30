const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forestSchema = new Schema({
    X : Number, 
    Y : Number, 
    month : String, 
    day : String, 
    FFMC : Number, 
    DMC : Number, 
    DC : Number, 
    ISI : Number, 
    temp : Number, 
    RH : Number, 
    wind : Number, 
    rain : Number, 
    area : Number
});

module.exports = mongoose.model('forest', forestSchema);
