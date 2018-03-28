import { expect, assert } from 'chai';
import 'mocha';

import Uniform from '../src/Uniform';

describe('insert', () => {
  it ('should insert c`s', (done) => {
    let uniform = new Uniform();
    uniform.promise()
      .then(function (model) {
        expect(uniform).to.be.an.instanceof(Uniform);
        done();
      })
      .catch(function (error) {
        done(error);
      })
  })
})