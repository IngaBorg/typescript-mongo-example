import { expect, assert } from 'chai';
import 'mocha';

import Uniform from '../src/Uniform';
import MyUniform from '../src/Interface/MyUniform';
import Util from '../lib/util';

describe('insert', () => {
  it ('should insert c`s', (done) => {
    let uniform = new Uniform();
    uniform.promise()
      .then(function (model: any) {
        let dd = new Date();
        dd.setDate(dd.getDate()-1);
        let myModel = new model({
          color: '00f',
          type: 'Shirt',
          level: 6,
          usedDate: dd
        })

        myModel.save(function(err, resp) {
          if (err) done(new Error(err));

          expect(resp.color).is.not.eq(undefined);
          done();
        });
      })
      .catch(function (error) {
        done(error);
      })
  }).timeout(10000);

  it ('should ask user input', (done) => {
    let util = new Util();

    util.ask('Color? ')
      .then(function (resp) {
        return util.ask('type? ');
      })
      .then(function(resp) {
        console.log(resp);
        done();
      })
      .catch(function (error) {
        done(error);
      })
  }).timeout(0);
})