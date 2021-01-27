//imorting axios for access to API
import axios from 'axios';

//getting API's url
const api = axios.create({
    baseURL: 'https://callcenterpg-backend.herokuapp.com/api/'
});

export default api;

