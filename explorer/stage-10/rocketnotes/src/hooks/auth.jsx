import { createContext, useContext, useState } from 'react'; // useContext to use the Context API.

import { api } from '../services/api';

import PropTypes from 'prop-types';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    // Authentication function

    // States are usually created in the beginning of the function
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password});
            const { user, token } = response.data;

            api.defaults.headers.authorization = `Bearer ${token}`; // Estou inserindo um token do estilo bearer em todas as requisições que o usuário vai fazer a partir de agora.
            setData({ user, token });

        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("It was not possible to sign in. Please try again.");
            }
          }
        }

    return (
        <AuthContext.Provider value={{ signIn, user: data.user }}>
            {children}
        </AuthContext.Provider>
    );
}

// Children is the child of AuthProvider, which is <Routes /> in main.jsx, containing all the application routes.

function useAuth() {
    const context = useContext(AuthContext);

    return context;

    // This is the hook, so it's named useAuth.
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthProvider, useAuth };