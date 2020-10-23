import Axios from 'axios';

const callAPI = Axios.create({
  baseURL: ' http://localhost:3005',
  timeout: 10000,
});

export default callAPI;
