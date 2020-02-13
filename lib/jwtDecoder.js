'use strict';

module.exports = (body, secret, cb) => {
    if (!body) {
        return cb(new Error('invalid jwtdata'));
    }

    // eslint-disable-next-line global-require
    require('jsonwebtoken').verify(body.toString('utf8'), secret, {
        algorithm: 'HS256',
    }, cb);
};
