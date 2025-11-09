import type { LoginCredentials, User } from "types";
import { createContext, type ReactNode, useEffect, useState } from "react";
import { authApi } from "services";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (credentials: LoginCredentials) => Promise<void>;
    logout: () => Promise<void>;
    refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({children}: { children: ReactNode }) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const refreshUser = async () => {
        try {
            const data = await authApi.getCurrentUser();
            setUser(data.user)
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        void refreshUser();
    }, []);


    const login = async (credentials: LoginCredentials) => {
        const data = await authApi.login(credentials);
        if (data.success) {
            setUser(data.user);
        } else {
            throw new Error(data.error || 'Login failed');
        }
    };

    const logout = async () => {
        await authApi.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user, loading, login, logout, refreshUser}}>
            {children}
        </AuthContext.Provider>
    )

}

export {
    AuthContext,
    AuthProvider
};