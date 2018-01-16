import * as Debug from 'debug';
import { createRouter, boot } from '@oneflow/of-base-api';
import UserController from './api/user/user.controller';

const debug = Debug('demo-api');

boot(app => {
    // add a custom route
    debug('Info:', 'Adding custom routes');
    app.use('/api/users', createRouter(UserController));
});

export { boot };
