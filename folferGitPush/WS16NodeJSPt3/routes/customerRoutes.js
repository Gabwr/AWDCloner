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

router.post('/customers', async (req, res) => {
    const customerObject = new customer({
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        moneySpent: req.body.moneySpent
    });

    try {
        const customerToSave = await customerObject.save();
        res.status(200).json(customerToSave);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/customersBornDate/:id', async (req, res) => {
    try {
        const customerObject = await customer.findOne({ id: req.params.id });
        if (customerObject == null) {
            return res.status(404).json(404);
        }else{
            const date = new Date();
            const year = date.getFullYear();
            const bornDate =year- customerObject.age;
            const bornDateString = "Born Year: "+bornDate.toString();
            res.status(200).json(bornDateString);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
module.exports = router;