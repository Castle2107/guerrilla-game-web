const logIn = (userId) => {
    localStorage.setItem('AUTHENTICATED_USER', userId);
}

const logOut = () => {
    localStorage.removeItem('AUTHENTICATED_USER', undefined);
}

const getAuthenticatedUser = () => {
    return localStorage.getItem('AUTHENTICATED_USER');
}

export { logIn, logOut, getAuthenticatedUser };