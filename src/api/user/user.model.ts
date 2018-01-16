import { MongooseModel } from '@oneflow/of-base-api';

import mongooseSchema from './user.schema';
import hooks from './user.hooks';

const model = new MongooseModel('User', mongooseSchema, 'users');
hooks(model);

export default model;
