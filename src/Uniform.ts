import DB, { Options } from './Model/DB';
import MyUniform from './Interface/MyUniform';

export default class Uniform implements MyUniform {
  color: StringConstructor;
  type: StringConstructor;
  level: NumberConstructor;
  usedDate: DateConstructor;

  promise: () => Promise<{}>;

  constructor() {
    let that = this;

    this.promise = () => {
      return new Promise(function(resolve, reject) {
        that.initDB()
          .then(function(model) {
            resolve(model);
          })
          .catch(function (error) {
            reject(error);
          })
      })
    }
  }

  initDB() {
    return new Promise(function(resolve, reject) {
      new DB(<Options>{
        host: process.env.DB_HOST,
        db: process.env.DB_NAME,

        scheme: {
          name: 'uniform',
          struct: <MyUniform> {
            color: String,
            type: String,
            level: Number,
            usedDate: Date
          }
        },

        error: function (error) {
          reject(error);
        },
        open: function (schema) {
          resolve(schema);
        }
      });
    });
  }
}