const { expect } = require('chai');
const hello = require('./hello');

describe('hello()', () => {
  it('returns a body with a message prop', () => {
    hello(null, null, (err, response) => {
      expect(JSON.parse(response.body).message).to.exist;
    });
  });
});
