const server = require('./server');
const request = require('supertest');

describe('server', () => {
  describe('GET / endpoint', () => {
    it('returns a status code of 200', () => {
        return request(server)
        .get('/')
        .expect(200)
      });
    it('returns the right response body', () => {
      const expectedResBody = JSON.stringify([
        {
          id: 0,
          name: 'Gabe',
          position: 'instructor',
        },
      ]);
      return request(server)
      .get('/')
      .expect(expectedResBody)
    });
  });
});
