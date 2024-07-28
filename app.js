const express = require('express');
const app = express();
const connectDB = require('./src/Config/db');

const authRoute = require('./src/Routes/authRoute');
const userRoute = require('./src/Routes/userRoute');

app.use(express.json()); // Middleware to parse JSON

const port = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Routes
app.use('/auth', authRoute); // Correctly use the auth route
app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
