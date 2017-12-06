const logIn = (userId) => {
    localStorage.setItem('AUTHENTICATED_USER', userId);
}

const logOut = () => {
    localStorage.removeItem('AUTHENTICATED_USER', undefined);
}

const getAuthenticatedUser = () => {
    return localStorage.getItem('AUTHENTICATED_USER');
}

let getBase_URL = () => {
    return 'http://' + localStorage.getItem('BASE_URL');
}

let setBase_URL = (newIp) => {
    localStorage.setItem('BASE_URL', newIp);
    window.location.reload();
}

export { logIn, logOut, getAuthenticatedUser, setBase_URL, getBase_URL };