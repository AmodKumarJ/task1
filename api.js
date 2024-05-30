import axios from 'axios';

const API_URL = 'https://api.restful-api.dev/objects';

export const getObjects = () => axios.get(API_URL);
export const getObject = (id) => axios.get(`${API_URL}/${id}`);
export const createObject = (data) => axios.post(API_URL, data);
export const updateObject = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteObject = (id) => axios.delete(`${API_URL}/${id}`);
