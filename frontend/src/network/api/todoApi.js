// api/todoApi.js
import axios from 'axios';

// Pulling the base URL from environment variables
const BASE_URL = "https://to-do-friend-1.onrender.com";

// Creating axios client instance
const apiClient = axios.create({
  baseURL: `${BASE_URL}/api/todo`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
