import React, { createContext, useContext, useState, useEffect } from 'react';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);

    useEffect(() => {
        setIsLoggedIn(!!token);
    }, [token]);

    const storeTokenInLS = (serverToken) => {
        localStorage.setItem("token", serverToken);
        setToken(serverToken);
    };

    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("token");
    };

    return ( 
        <AuthContext.Provider value={{storeTokenInLS, LogoutUser, isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
