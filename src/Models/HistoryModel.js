const mongoose = require('mongoose');
const { Schema } = mongoose;

const historySchema = new Schema({
    beverageType: {
        type: String,
        enum: ['Tea', 'Coffee'],
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});


