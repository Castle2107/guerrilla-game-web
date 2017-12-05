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
    return localStorage.getItem('BASE_URL');
}

let setBase_URL = () => {
    
}

export { logIn, logOut, getAuthenticatedUser };