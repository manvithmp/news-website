import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'newsapi.org/v2', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;