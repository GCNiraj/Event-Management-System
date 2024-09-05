const path = require('path')

/* LOG IN PAGE */
exports.getLoginForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'sign_in.html'))
}

/* SIGN UP PAGE */
exports.getSignupForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'sign_up.html'))
}

/* HOME PAGE */
exports.getHome = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'))
}

/* Profile Page */
exports.getProfile = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'myprofilepage.html'))
}

/* Create Event Page */
exports.getEventForm = (req, res) => {
    res.sendFile(path.join(__dirname,'../','views','create_venue_event.html'))
}