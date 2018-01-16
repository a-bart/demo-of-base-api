import * as mongoose from "mongoose";
import * as bluebird from "bluebird";

(<any>mongoose).Promise = bluebird;

mongoose.connect('mongodb://localhost/example-api', { useMongoClient: true });

export { mongoose };
