const Event = require('./../models/eventModel')
const AppError = require('../utils/appError')

exports.getAllEvents = async (req, res ,next) => {
    try {
        const events = await Event.findAll()
        res.status(200).json({data: events, status: 'success'})
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

exports.createEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.json({data: event, status:"success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}