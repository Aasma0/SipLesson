const mongoose = require('mongoose');
const { Schema } = mongoose;

const healthInfoSchema = new Schema({
    beverageType: {
        type: String,
        enum: ['Tea', 'Coffee'],
        required: true
    },
    benefits: [{
        type: String,
        required: true
    }],
    hazards: [{
        type: String,
        required: true
    }],
    created_at: {
        type: Date,
        default: Date.now
    }
});

