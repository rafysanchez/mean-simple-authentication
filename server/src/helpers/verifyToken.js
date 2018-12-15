const jwt = require('jsonwebtoken');

async function verifyToken(req, res, next) {
    console.log(req.headers)
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
        return res.status(401).send('Unauthorized request');
    }
    try {
        let payload = await jwt.verify(token, 'secretkey');
    } catch(e) {
        return res.status(401).send('Unauthorized request');
    }
    console.log(payload)
    if (!payload) {
        return res.status(401).send('Unauthorized request');
    }
    req.usedId = payload.subject;
    next();
}

module.exports = { verifyToken };