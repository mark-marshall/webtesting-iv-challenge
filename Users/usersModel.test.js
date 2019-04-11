const usersModel = require('./usersModel');
const fakeDb = require('./usersModel').users;

describe('usersModel', () => {

  describe('get handler', () => {
    it('returns a user list', () => {
      const users = usersModel.get();
      expect(users).toHaveLength(1);
    });
  });
  
  describe('post handler', () => {
    it('returns correct error message when given incorrect body', () => {
      const expectedMsg = 'you must include a name and position for the user';
      const postRes = usersModel.post({ name: 'orlando' });
      expect(postRes).toBe(expectedMsg);
    });
    it('returns the user if added successfully', () => {
      const newUser = {
        name: 'orlando',
        position: 'pm'
      };
      const { name, position } = usersModel.post(newUser);
      expect(name).toBe('orlando');
      expect(position).toBe('pm');
    });
  });
});
