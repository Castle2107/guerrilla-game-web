import axios from 'axios';

export const get = (url, data = {}) => {
    return axios.get(url, data)
        .then(response => (response))
        .catch(errors => (errors));
};

export const post = (url, data = {}) => {
    return axios.post(url, data)
        .then(function(response){
            return response;
        })
        .catch(errors => (errors));
};