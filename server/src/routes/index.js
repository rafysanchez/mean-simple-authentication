const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/User');


router.get('/', (req, res) => {
    res.send('API Index');
});

router.post('/signup', async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    const payload = { subject: user._id };
    const token = jwt.sign(payload, 'secretkey');
    res.json({token})
});

router.post('/signin', async (req, res) => {
    const userData = req.body;
    const user = await User.findOne({ email: userData.email });
    if (!user) {
        res.status(401).json({ res: 'Invalid Email' });
    } else {
        if (user.password !== userData.password) {
            res.status(401).json({ response: 'Invalid password' });
        } else {
            const payload = { subject: user._id };
            const token = jwt.sign(payload, 'secretkey');
            res.json({token});
        }
    }
});

module.exports = router;