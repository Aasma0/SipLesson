const mongoose = require('mongoose');
const { Schema } = mongoose; //destructuring
// const Schema = mongoose.Schema
const RecipeSchema = new Schema({
    name:{
        type: String,
        required: true
    },

    category:{
        type: String,
        enum: ['Tea', 'Coffee'],
    },


    
});

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe; 