const debug = require('debug')('customer-db-api');
const { createRouter, boot } = require('@oneflow/of-base-api');
const UserController = require('./api/user/user.controller');

boot(app => {
    // add a custom route
    debug('Info:', 'Adding custom routes');
    app.use('/api/users', createRouter(UserController));
});

module.exports = boot;