const mongoose=require('mongoose');
const {Schema}=mongoose;    

const productSchema=new Schema({
    category:{
        type:Schema.Types.ObjectId,
        ref:'categories',
        required:true
    },

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },

    
});

const Product=mongoose.model('recipes',productSchema);
module.exports=Product;