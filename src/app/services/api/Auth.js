import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'; //TODO: this url will change, so it won't be a constant
const LOGIN_URL = BASE_URL + '/login'; //TODO: create this route in web service
const SIGN_UP_URL = BASE_URL + '/create_guerrilla';

const signUp = (data) => {
    return post(SIGN_UP_URL, data);
};

const login = (data) => {
	let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

	if(regex.test(data)){
		return post(LOGIN_URL, {email: data});
	}else{
		return post(LOGIN_URL, {username: data});
	}
};

const post = (url, data) => {

    return axios.post(url, data)
        .then((response) => (
            Promise.resolve(response.data)
        ))
        .catch((errors) => (
            Promise.reject(errors.response)
        ));
};

export { signUp, login };