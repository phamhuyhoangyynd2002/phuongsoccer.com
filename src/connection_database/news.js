const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const newsSchema = new Schema({
    img: {
        type: String,
        required: 'This field is required.'
    },
    title: {
        type: String,
        required: 'a@gmail.com'
    },
    author: {
        type: String,
        required: "This field is required."
    },
    description: {
        type: String,
        default: "description."
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


module.exports = mongoose.model('news', newsSchema);