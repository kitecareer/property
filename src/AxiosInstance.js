import axios from 'axios';

const Axios = axios.create({
  baseURL: `http://192.168.1.41:8000/api/`,
});

export default Axios;