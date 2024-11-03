import * as React from "react";
import { createContext, PropsWithChildren } from "react";

type AuthContextType = {
    isLoggedIn: boolean;
};

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
});

export const AuthProvider = ({children} : PropsWithChildren) => {
    const isLoggedIn = true;
    return (
        <AuthContext.Provider value={{ isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};