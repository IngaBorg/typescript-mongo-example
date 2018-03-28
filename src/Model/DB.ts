import * as mongoose from 'mongoose';

export default class DB {
  server: string;
  db: string;

  constructor(options: Options) {
    this.server = options.host;
    this.db = options.db;
    let that = this;

    mongoose.connect('mongodb://' + options.host + '/' + this.db)
    var db = mongoose.connection;
    db.on('error', function (error) {
      console.log(error);
      options.error(new Error('Connection error'));
    });
    db.once('open', function () {
      let model = that.scheme(options.scheme);
      options.open(model);
    })
  }

  scheme(struct: Struct) {
    let schema = new mongoose.Schema(struct.struct);
    var result = mongoose.model(struct.name, schema);
    return result;
  }
}

export interface Options {
  host: string;
  db: string;
  scheme: Struct;
  error: (error: Error) => void,
  open: (any) => void
}

export interface Struct {
  name: string,
  struct: any
}