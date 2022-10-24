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
        type: ObjectId,
        default: null
    },
    product_Image: {
        type: String,
        default: 'This field is required.'
    },
    updated_At: {
        type: Date,
        default: Date.now
    },
    users_Updater: {
        type: ObjectId,
        default: null
    },
    image: {
        type: Array,
        default:null
    }
});

module.exports = mongoose.model('products', productsSchema);