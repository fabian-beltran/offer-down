import api from './api';

export const uploadImage = async (data) => {
    return api.post(`/images/upload`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
};
