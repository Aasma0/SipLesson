const express = require('express');
const app = express();
const connectDB = require('./src/Config/db');

const authRoute = require('./src/Routes/authRoute');
const RecipeRoute = require('./src/Routes/RecipeRoute')
const profileRoutes = require("./src/Routes/ProfileRoutes")
const categoryRoutes=require('./src/Routes/categoryRoute')


app.use(express.json()); // Middleware to parse JSON

const port = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Routes
app.use('/auth', authRoute); // Correctly use the auth route
app.use('/recipe', RecipeRoute);

app.use('/api/profile', profileRoutes)
app.use('/api/category',categoryRoutes)

app.use("/uploads", express.static(__dirname + "/uploads"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
