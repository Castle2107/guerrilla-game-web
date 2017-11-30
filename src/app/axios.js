import axios from 'axios';

export function sign(email, username, faction){
	let url = "http://localhost:8000/create_guerrilla";

	let data = {
		'email': email,
		'username': username,
		'faction': faction
	}

	return axios.post(url, data)
	.then(function (response) {
		return response;
	})
	.catch(function (error) {
		return error;
	});
};