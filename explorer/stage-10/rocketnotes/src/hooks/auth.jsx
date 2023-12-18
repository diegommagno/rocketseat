import { createContext, useContext } from 'react'; // useContext to use the Context API.
import PropTypes from 'prop-types';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{ email: 'diego@email.com' }}>
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