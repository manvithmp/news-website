import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines?country=us&page=${currentPage}&apiKey=be921f7040b44470903d919e65676e25`, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;