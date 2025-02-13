import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://gnews.io/api/v4', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;