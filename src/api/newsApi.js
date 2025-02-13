import axiosInstance from './axiosInstance';

const API_KEY = 'd564f39d6c1916192ff167fdd722d823'; // Hardcoded GNews API key

export const getTopHeadlines = async () => {
  try {
    const response = await axiosInstance.get('/top-headlines', {
      params: {
        country: 'us',
        token: API_KEY, // Using hardcoded API key
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching top headlines:', error); 
    throw error;
  }
};

export const searchArticles = async (query) => {
  try {
    const response = await axiosInstance.get('/search', {
      params: {
        q: query,
        token: API_KEY, // Using hardcoded API key
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching articles:', error); 
    throw error;
  }
};

export const getArticlesByCategory = async (category) => {
  try {
    const response = await axiosInstance.get('/top-headlines', {
      params: {
        topic: category,
        token: API_KEY, // Using hardcoded API key
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching articles for category ${category}:`, error); 
    throw error;
  }
};