const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    profileImage: String,
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

const User = mongoose.model('User', userSchema);

module.exports = User