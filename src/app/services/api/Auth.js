import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'; //TODO: this url will change, so it won't be a constant
const LOGIN_URL = BASE_URL + '/login'; //TODO: create this route in web service
const SIGN_UP_URL = BASE_URL + '/create_guerrilla';

const signUp = (data) => {
    return post(SIGN_UP_URL, data);
};

const login = (email) => {
    return post(LOGIN_URL, {email: email});
};

const post = (url, data) => {

    return axios.post(url, data)
        .then((response) => (
            Promise.resolve(response.data)
        ))
        .catch((errors) => (
            Promise.reject(errors.response.data)
        ));
};

export {signUp};