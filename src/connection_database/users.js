const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'a@gmail.com'
    },
    password: {
        type: String,
        required: "This field is required."
    },
    updated_At: {
        type: Date,
        default: Date.now
    },
    phone_Number: {
        type: String,
        default: "00000000000"
    },
    role: {
        type: Number,
        default: 1
    },
    avatar: {
        type: String,
        required: 'avatar.png'
    },
    sub: {
        type: String,
        required: ''
    }
});


module.exports = mongoose.model('User', userSchema);