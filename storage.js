const lsUsersKey = 'users';

function getUsers() {
    const users = localStorage.getItem(lsUsersKey);
    if (!users) {
        return [];
    }
    return JSON.parse(users);
};

function registerUser(login, password) {
    const users = getUsers();
    users.push({ login, password });
    localStorage.setItem(lsUsersKey, JSON.stringify(users));
};


export default { getUsers, registerUser };
