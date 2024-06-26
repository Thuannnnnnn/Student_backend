const express = require('express');
const session = require('express-session'); // Import express-session
const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { generateTokenAndRedirect } = require('../middleware/auth')
require('dotenv').config();
const router = express.Router();


router.use(session({
    secret: 'abc',
    resave: false,
    saveUninitialized: false
}));

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    async function (req, res) {
        generateTokenAndRedirect(req, res)

    }
);
router.get("/login/sucess", async (req, res) => {

    if (req.user) {
        res.status(200).json({ message: "user Login", user: req.user })
    } else {
        res.status(400).json({ message: "Not Authorized" })
    }
})
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});
module.exports = router;
