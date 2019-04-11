const usersModel = require('./usersModel');
const fakeDb = require('./usersModel').users;

describe('usersModel', () => {
  describe('get handler', () => {
    it('returns a user list', () => {
      const users = usersModel.get();
      expect(users).toHaveLength(2);
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
        position: 'pm',
      };
      const { name, position } = usersModel.post(newUser);
      expect(name).toBe('orlando');
      expect(position).toBe('pm');
    });
  });

  describe('delete handler', () => {
    it('returns an error message when given  a user id that does not exist', () => {
        const expectedMsg = 'no user exists with this id';
        const delRes = usersModel.remove(1200);
        expect(delRes).toBe(expectedMsg);
    });
    it('returns the deleted user if succesful', () => {
        const newUser = {
            name: 'orlando',
            position: 'pm',
          };
        const returnUser = {
            name: 'orlando',
            position: 'pm',
            id: 3,
        }
        usersModel.post(newUser)
        const delRes = usersModel.remove(3);
        expect(delRes).toEqual(returnUser);
    });
    it('removes the user if succesful', () => {
        const listBefore = usersModel.get();
        expect(listBefore).toHaveLength(3);        
        usersModel.remove(0)
        const listAfter = usersModel.get();
        expect(listAfter).toHaveLength(2);  
    });
  });
});
