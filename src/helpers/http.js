import axios from 'axios';

const http = axios.create({
  baseURL: 'https://message-wall-api.nerfthis.xyz'
});

export default http;
