import axios from 'axios';
import type { LoginCredentials, SecurityConfig } from "types";

const BASE_URL = 'http://localhost:3000/';

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

const accessControlApi = {
    getAdminData: async () => {
        const response = await api.get('/access-control/admin');
        return response.data;
    }
}

const configApi = {
    getConfig: async (): Promise<SecurityConfig> => {
        const response = await api.get('/config');
        return response.data;
    },

    updateXSSProtection: async (enabled: boolean) => {
        const response = await api.post('/config/xss', {enabled});
        return response.data;
    },

    updateAccessControl: async (enabled: boolean) => {
        const response = await api.post('/config/access-control', {enabled});
        return response.data;
    }
}

const authApi = {
    login: async (credentials: LoginCredentials) => {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    },

    logout: async () => {
        const response = await api.post('/auth/logout');
        return response.data;
    },

    getCurrentUser: async () => {
        try {
            const response = await api.get('/auth/current');
            return response.data;
        } catch (error) {
            return {user: null};
        }
    }
}


export {
    xssApi,
    accessControlApi,
    configApi,
    authApi,
};