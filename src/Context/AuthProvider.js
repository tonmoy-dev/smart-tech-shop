import React, { createContext } from "react";
import useFirebaseAuth from "../Hooks/useFirebaseAuth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const allContexts = useFirebaseAuth();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider ;