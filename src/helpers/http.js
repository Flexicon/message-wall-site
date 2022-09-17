import axios from 'axios';

const http = axios.create({
  baseURL: 'https://message-wall-api-v2.nerfthis.xyz'
});

export default http;
