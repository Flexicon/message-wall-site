import axios from 'axios';

const http = axios.create({
  baseURL: 'http://message-wall.nerfthis.xyz'
});

export default http;
