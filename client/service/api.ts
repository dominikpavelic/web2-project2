import axios from 'axios';

const BASE_URL = 'https://localhost:3000/';

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});


const xssApi = {
    getComments: async () => {
        const response = await api.get('/xss/comments');
        return response.data;
    },

    addComment: async (text: string) => {
        const response = await api.post('/xss/comments', {text});
        return response.data;
    },

    clearComments: async () => {
        const response = await api.delete('/xss/comments');
        return response.data;
    }
};


export { xssApi };