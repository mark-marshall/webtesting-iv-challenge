const server = require('./server');
const request = require('supertest');

describe('server', () => {
  describe('GET / endpoint', () => {
    it('returns a status code of 200', () => {
      return request(server)
        .get('/')
        .expect(200);
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
        .expect(expectedResBody);
    });
  });

  describe('POST /users', () => {
    it('returns a status code of 400 when no body is passed', () => {
      return request(server)
        .post('/users')
        .expect(400);
    });
    it('returns expected message on incorrect posting', () => {
      const expectedMsg = JSON.stringify(
        'you must include a name and position for the user',
      );
      return request(server)
        .post('/users')
        .expect(expectedMsg);
    });
    it('returns a status code of 200 with correctly formated post', () => {
      const addedUsr = {
        name: 'orlando',
        position: 'pm',
      };
      return request(server)
        .post('/users')
        .send(addedUsr)
        .expect(201);
    });
    it('returns the added user when sucessful post is made', () => {
      const addedUsr = {
        name: 'orlando',
        position: 'pm',
      };
      const returnedUsr = {
        name: 'orlando',
        position: 'pm',
        id: 2,
      };
      return request(server)
        .post('/users')
        .send(addedUsr)
        .expect(returnedUsr);
    });
  });
});
