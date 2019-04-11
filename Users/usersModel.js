const users = [
  {
    id: 0,
    name: 'Gabe',
    position: 'instructor',
  },
  {
    id: 1,
    name: 'Samar',
    position: 'pm',
  },
];

const get = () => {
  return users;
};

const post = user => {
  if (user.name && user.position) {
    const entry = user;
    entry.id = users.length;
    users.push(entry);
    return entry;
  } else {
    return 'you must include a name and position for the user';
  }
};

const remove = id => {
  const filtUsers = users.filter(user => user.id === id);
  if (filtUsers.length === 1) {
    const delUser = filtUsers[0];
    users.splice(id, 1);
    return delUser;
  } else {
    return 'no user exists with this id';
  }
};

module.exports = {
  users,
  get,
  post,
  remove,
};
