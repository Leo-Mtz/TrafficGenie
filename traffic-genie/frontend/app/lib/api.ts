import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchPredictions = async (city: string) => {
  const response = await axios.get(`${API_URL}/api/predictions/${city}`);
  return response.data;
};