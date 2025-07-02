const express = require('express');
const userdata = require('../models/user');
const router = express.Router();

// Get all customers
router.get('/users', async (req, res) => {
    try {
        const usersdata = await userdata.find();
        res.json(usersdata);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;