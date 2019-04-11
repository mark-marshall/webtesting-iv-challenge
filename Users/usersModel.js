const users = [
  {
    id: 0,
    name: 'Gabe',
    position: 'instructor',
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

module.exports = {
  users,
  get,
  post,
};
