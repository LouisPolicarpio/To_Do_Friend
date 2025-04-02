import apiClient from '../api/pointsApi'; // Importing the apiClient instance

export const getPoints = async()=>{
    try {
        const response = await apiClient.get('/');
        console.log(response);
        return response.data.data[0];
    } catch (error) {
        throw new Error(error.response?.data || 'Failed to get points');

    }
};

export const editPoints = async({score})=>{
    try {
        const response = await apiClient.put('/',{score});
        console.log(response);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || 'Failed to edit points');

    }
};