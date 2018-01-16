import { BaseController } from '@oneflow/of-base-api';

import definition from './user.def';
import UserModel from './user.model';

export default class UserController extends BaseController {
    private def: any;
    private model: any;
    constructor({ def = definition} = {}) {
        super();
        this.def = def;
        this.model = UserModel;
    }
}
