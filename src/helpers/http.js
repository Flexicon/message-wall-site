import axios from 'axios';

const http = axios.create({
  baseURL: 'https://message-wall-api.herokuapp.com'
});

export default http;
