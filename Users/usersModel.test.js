const usersModel = require('./usersModel');
const fakeDb = require('./usersModel').users;

describe('usersModel', () => {
    describe('get handler', () => {
        it('returns a user list', () => {
            const users = usersModel.get();
            expect(users).toHaveLength(1);
        })
    })
})