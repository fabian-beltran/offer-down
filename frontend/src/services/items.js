import api from './api';

export const getItems = async () => {
    return api.get('/items');
}

export const getItem = async (id) => {
    return api.get(`/items/${id}`);
};

export const createItem = async (data) => {
    return api.post('/items', data);
}

export const deleteItem = async (id) => {
    return api.delete(`/items/${id}`);
};