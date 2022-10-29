const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productsSchema = new Schema({
    name: {
        type: String,
        default: 'This field is required.'
    },
    description: {
        type: String,
        default: 'This field is required.'
    },
    producer: {
        type: String,
        default: null
    },
    product_Image: {
        type: String,
        default: 'This field is required.'
    },
    users_Updater: {
        type: String,
        default: ''
    },
    updated_At: {
        type: Date,
        default: Date.now
    },
    image: {
        type: Array,
        default:null
    },
    sold: {
        Type: Number,
        default:0
    }
});

module.exports = mongoose.model('products', productsSchema);