const express = require('express')
const paymentController = require('./../controllers/paymentController')
const router = express.Router()

router
    .route('/')
    .post(paymentController.registerEvent)
    .get(paymentController.getAllPayments)



module.exports = router