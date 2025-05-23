const  mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        reuired: true
    },
    age: {
        type: Number,
        required: true
    },
    work : {
        type: String,
        enum: ['chef','waiter','manager'],
        // required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        
    },
    address: {
        type: String
    },
    salary:{
        type: Number,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
});
const Person = mongoose.model('Person', personSchema);
module.exports = Person;