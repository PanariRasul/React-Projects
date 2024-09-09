const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['student', 'instructor'], required: true }
});

module.exports = mongoose.model('User', UserSchema);