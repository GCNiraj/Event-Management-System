const express = require('express')
const router = express.Router()
const viewsController = require('./../controllers/viewController')
// const authController = require('./../controllers/authController')

router.get('/', viewsController.getHome)
router.get('/signin', viewsController.getLoginForm)
router.get('/signup', viewsController.getSignupForm)
// router.get('/me',authController.protect,viewsController.getProfile)

/* Event routes start here */
router.get('/add_event', viewsController.getEventForm) 

module.exports = router