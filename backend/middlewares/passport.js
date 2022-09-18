const passport = require('passport');
const { Strategy } = require('passport-jwt');
const { SECRET } = require('../constants');
const db = require('../db');

const cookieExtractor = (req) => {
    if (req && req.cookies) return req.cookies['token'];
}

passport.use(new Strategy(
    { secretOrKey: SECRET, jwtFromRequest: cookieExtractor },
    async ({ id }, done) => {
        try {
            const { rows } = await db.query('SELECT id, email FROM users WHERE id = $1', [id]);

            if (!rows.length) throw new Error('Not Authorized');

            const user = rows[0];

            return await done(null, user);
        } catch (err) {
            console.log(err.message);
            done(null, false);
        }
    }
))