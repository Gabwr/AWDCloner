const mongoose = require('mongoose');

cusromerSchema = new mongoose.Schema(
    {
        id: {type: Number},
        name: {type: String},
        age: {type: Number},
        moneySpent: {type: Number}
    },
    {
        collection: 'Customer',
    }
);


module.exports = mongoose.model('Customer', cusromerSchema);