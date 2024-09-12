const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

function ensureAuthenticated(req, res, next) {
    
    const token = req.session.token;

    if(!token) {
        return res.status(401).send('Unauthorized');
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized');
        }
        req.user = decoded;
        next();
    });
}

module.exports = ensureAuthenticated;