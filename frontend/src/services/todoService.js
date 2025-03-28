// services/todoService.js
import apiClient from '../api/todoApi'; // Importing the apiClient instance

export const createTodo = async (data) => {
    try {
        // Sending POST request to create a todo, passing 'data' as the payload
        const response = await apiClient.post('/', data);
        console.log(response); // Log the full response object
        // Return the response data if the request is successful
        return response.data;
    } catch (error) {
        // If an error occurs, throw a custom error with error details
        throw new Error(error.response?.data || 'Failed to create todo');
    }
};

export const getTodo = async () => {
    try {
        // Sending POST request to create a todo, passing 'data' as the payload
        const response = await apiClient.get('/');
        console.log(response); // Log the full response object
        // Return the response data if the request is successful
        return response.data.data;
    } catch (error) {
        // If an error occurs, throw a custom error with error details
        throw new Error(error.response?.data || 'Failed to get todo');
    }
};

export const editTodo = async ({id,data}) => {
    try {
        // Sending POST request to create a todo, passing 'data' as the payload
        const response = await apiClient.put(`/${id}`,{task: data});
        console.log(response); // Log the full response object
        // Return the response data if the request is successful
        return response.data;
    } catch (error) {
        // If an error occurs, throw a custom error with error details
        throw new Error(error.response?.data || 'Failed to create todo');
    }
};

export const deleteTodo = async (id) => {
    try {
        // Sending POST request to create a todo, passing 'data' as the payload
        const response = await apiClient.delete(`/${id}`);
        console.log(response); // Log the full response object
        // Return the response data if the request is successful
        return response.data;
    } catch (error) {
        // If an error occurs, throw a custom error with error details
        throw new Error(error.response?.data || 'Failed to delete todo');
    }
};