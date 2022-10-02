import api from './api';

export const getItems = async () => {
    return api.get('/items');
}