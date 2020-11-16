const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const robotSchema = new Schema({
    model: String,
    name: String,
    price: String,
    image: String,
    description: String
});

// Model
const Robot = mongoose.model('Robot', robotSchema);

module.exports = Robot;