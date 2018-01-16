const { BaseController } = require('@oneflow/of-base-api');

const definition = require('./user.def');
const UserModel = require('./user.model');

class UserController extends BaseController {
    constructor({ def = definition} = {}) {
        super();
        this.def = def;
        this.model = UserModel;
    }
}

module.exports = UserController;