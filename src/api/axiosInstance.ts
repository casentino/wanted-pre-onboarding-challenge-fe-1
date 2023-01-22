import axios from 'axios';
import { API_HOST } from '../constants/constants';

export const axiosInstance = axios.create({
  baseURL: API_HOST,
});
