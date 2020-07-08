import axios from 'axios';
// para rodar a API json-server server.json -p 3333

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
