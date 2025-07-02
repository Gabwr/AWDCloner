const express = require('express');
const customer = require('../models/customer');
const router = express.Router();

// Get all customers
router.get('/customers', async (req, res) => {
    try {
        const customers = await customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/customers/:id', async (req, res) => {
    try {
        const customerObject = await customer.findOne({ id: req.params.id });
        if (customerObject == null) {
            return res.status(404).json(404);
        }else{
            res.status(200).json(customerObject);
        }
        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;