const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/crudmernstack');

const objetodb = mongoose.connection;

objetodb.on('connected', () => {
    console.log('MongoDB connected successfully');
});

objetodb.on('error', () => {
    console.log('MongoDB connection failed');
});

module.exports = mongoose;
