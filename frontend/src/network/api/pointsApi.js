// api/todoApi.js
import axios from 'axios';

// Pulling the base URL from environment variables
const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

// Creating axios client instance
const apiClient = axios.create({
  baseURL: `${BASE_URL}/api/points`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
