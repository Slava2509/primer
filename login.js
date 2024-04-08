const loginEl = document.querySelector('.login');
const passwordEl = document.querySelector('.password');
const loginBtnEl = document.querySelector('.loginBtn');




loginBtnEl.addEventListener('click', () => {
    const login = loginEl.value;
    const password = passwordEl.value;
    if (localStorage.getItem(lsUsersKey)) {
        const users = JSON.parse(localStorage.getItem(lsUsersKey));
        if (users.some(user => user.login === login)) {
            alert('User already exists');
            return;
        }
        users.push({ login, password });
        localStorage.setItem(lsUsersKey, JSON.stringify(users));
    }
    else {
        const users = [{ login, password }];
        localStorage.setItem(lsUsersKey, JSON.stringify(users));
    }
    location.href = "login.html";
});
