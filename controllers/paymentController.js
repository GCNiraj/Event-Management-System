const Payment = require('./../models/paymentModel')
const AppError = require('../utils/appError')

exports.getAllPayments = async (req, res ,next) => {
    try {
        const payments = await Payment.findAll()
        res.status(200).json({data: payments, status: 'success'})
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

exports.registerEvent = async (req, res) => {
    try {
        const registration = await Payment.create(req.body);
        res.json({data: registration, status:"success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}