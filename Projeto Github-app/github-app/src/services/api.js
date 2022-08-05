import axios from 'axios';

//Consumindo a api do github.

const api = axios.create ({
    baseURL: 'https://api.github.com/',
});

export default api;