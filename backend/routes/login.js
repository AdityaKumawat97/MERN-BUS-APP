const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();



router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error('No User Found')
                console.log(err)
                return next(error);
            }
            req.login(user, { session: false }, async (error) => {
                if (error) return next(error)
                const body = { _id: user._id, name: user.name, email: user.email, gender: user.gender };
                const token = jwt.sign({ user: body }, 'top_secret');
                return res.json({ token });
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
});


// router.get('/Login', (req, res) => {
//     res.send("Login Here")
// })

module.exports = router;