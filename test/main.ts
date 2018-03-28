import { expect, assert } from 'chai';
import 'mocha';

import Uniform from '../src/Uniform';
import MyUniform from '../src/Interface/MyUniform';

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
  }).timeout(10000)
})