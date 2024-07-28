const AuthUser = require('../Models/authUserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const registerUser = async (req, res) => {
    const { firstName, lastName, email, phone, password, role } = req.body;

    try {
        let user = await AuthUser.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new AuthUser({
            firstName,
            lastName,
            email,
            phone,
            password,
            role,
        });

        await user.save();

        res.status(201).json({
            msg: "User registered",
            user,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await AuthUser.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ msg: "User is logged in", token, userDetails: user });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    registerUser,
    loginUser,
};
