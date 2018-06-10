import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reacr-my-burger.firebaseio.com/'
});

export default instance;