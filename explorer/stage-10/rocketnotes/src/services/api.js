import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://rocketnotes-api-lnqv.onrender.com'
});
// This is the URL of the API deployed in the render.com service.