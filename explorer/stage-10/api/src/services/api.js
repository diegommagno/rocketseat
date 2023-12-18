import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3333'
});
// Coloca endereço base da aplicação para não precisar ficar escrevendo em todas as requisições.