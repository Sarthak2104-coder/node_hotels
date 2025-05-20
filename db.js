const mongoose = require('mongoose'); 

const mongodbURL = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongodbURL);
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB Serer');
})

db.on('error', (error) => {
    console.error('Error connecting to MongoDB:', error);
})
db.on('disconnected', () => {
    console.log('Disconnected from MongoDB Server');
})

//Export the database connection
module.exports = db;