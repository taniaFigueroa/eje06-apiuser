/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        match: /.+@.+\..+/,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model('User', userSchema, 'users');

module.exports = userModel;