import { createContext, useContext, useState, useEffect } from 'react'; // useContext to use the Context API.

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

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user)); // LocalStorage needs a key and a value, using the app name as key makes it easy to understand, value in this case is user. User is an object, so we need to convert it to a string.
            localStorage.setItem("@rocketnotes:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Estou inserindo um token do estilo bearer em todas as requisições que o usuário vai fazer a partir de agora.
            setData({ user, token });

        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("It was not possible to sign in. Please try again.");
            }
          }
        }

        function signOut() {
            localStorage.removeItem("@rocketnotes:token");
            localStorage.removeItem("@rocketnotes:user");
            setData({}); // Clear data
        }

        async function updateProfile({ user, avatarFile }) {
            // Preciso receber os dados do user e vou receber atraves do objeto user
            try {
                if(avatarFile) {
                    const fileUploadForm = new FormData();
                    fileUploadForm.append("avatar", avatarFile);

                    const response = await api.patch("/users/avatar", fileUploadForm);
                    user.avatar = response.data.avatar;

                }

                await api.put("/users", user);
                localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

                setData({ user, token: data.token });
                alert("Profile updated successfully.")

            } catch (error) {
                if(error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("It was not possible to update your profile. Please try again.");
                }
              }
        }

        useEffect(() => {
            const token = localStorage.getItem("@rocketnotes:token");
            const user = localStorage.getItem("@rocketnotes:user");

            // If user and token exists
            if(token && user) {
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Estou inserindo um token do estilo bearer em todas as requisições que o usuário vai fazer a partir de agora.
                setData({
                    token,
                    user: JSON.parse(user), // Convert user back to an object
                });
            }
        }, []);

    return (
        <AuthContext.Provider value={{ 
                signIn, 
                signOut,
                updateProfile,
                user: data.user,
            }}>
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