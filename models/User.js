const mongoose = require('mongoose');
//const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        minLength: 4,
        required: true,
    },

    workoutLog: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],


})

module.exports = mongoose.model('User', userSchema);