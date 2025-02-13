import axiosInstance from './axiosInstance';

export const getTopHeadlines = async () => {
  try {
    const response = await axiosInstance.get('/top-headlines', {
      params: {
        country: 'us',
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    throw error;
  }
};