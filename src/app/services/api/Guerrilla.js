import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'; //TODO: this url will change, so it won't be a constant
const GET_GUERRILLA_URL = BASE_URL + '/inspect_guerrilla';
const BUY_GUERRILLA_URL = BASE_URL + '/buy_guerrilla';
const LIST_GUERRILLAS_URL = BASE_URL + '/list_guerrillas';
const ATTACK_GUERRILLA_URL = BASE_URL + '/attack_guerrilla';

class Guerrilla {

    static buyGuerrilla(data) {
        return this.post(BUY_GUERRILLA_URL, data);
    }

    static getGuerrilla(username) {
         return this.post(GET_GUERRILLA_URL, {id: username});
    }

    static list(data = {}) {
        return this.get(LIST_GUERRILLAS_URL, data);
    }

    static attackGuerrilla(data) {
        return this.post(ATTACK_GUERRILLA_URL, data);
    }

    static get(url, data) {
        return axios.get(url, data)
            .then((response) => (
                Promise.resolve(response.data)
            ))
            .catch((errors) => (
                Promise.reject(errors.response.data)
            ))
    }

    static post(url, data) {
        return axios.post(url, data)
            .then((response) => (
                Promise.resolve(response.data)                
            ))
            .catch((errors) => (
                Promise.reject(errors.response.data)                
            ));
    }

}

export default Guerrilla;