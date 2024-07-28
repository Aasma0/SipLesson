//controllers to create recipe

const Recipe = require("../Models/RecipeModel");

const createRecipe=async(req, res)=>{ 
    const {name, category}=req.body;
    
    const addRecipe = new Recipe({
        name:name,
        category:category
    });

    try{
        const response=await addRecipe.save();
        if(response){
            res.status(201).json({message:"Recipe created", response})
        }
    }
    catch(err){
        res.status(500).json({message:"Internal Server Error", err})
    }
    
};

module.exports=createRecipe;