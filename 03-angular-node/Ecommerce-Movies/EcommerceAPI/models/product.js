const { Schema, model } = require('mongoose');

const ProductSchema = Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }, 
    images: {
        type: String,
        required: true
    }
});

module.exports = model('Product', ProductSchema)