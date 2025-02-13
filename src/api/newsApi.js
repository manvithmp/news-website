import axiosInstance from './axiosInstance';

const API_KEY = 'd564f39d6c1916192ff167fdd722d823'; 
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