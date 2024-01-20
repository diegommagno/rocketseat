import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://rocketnotes-api-lnqv.onrender.com'
});
// Coloca endereço base da aplicação para não precisar ficar escrevendo em todas as requisições.