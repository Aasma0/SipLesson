const User = require('../Models/userModel');

const createUser = async (req, res) => {
    const { firstName, lastName, email, phone, role } = req.body;
    
    const addUser = new User({
        firstName,
        lastName,
        email,
        phone,
        role,
    });

    try {
        const response = await addUser.save();
        if (response) {
            res.status(201).json({ message: "User created", response });
        }
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", err });
    }
};

module.exports = createUser;
