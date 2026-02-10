const mongoose = require('mongoose');

// Create a schema for User
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    examTracking: [{
        examId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam' },
        score: { type: Number, default: 0 },
        date: { type: Date, default: Date.now }
    }]
}, {
    timestamps: true
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;