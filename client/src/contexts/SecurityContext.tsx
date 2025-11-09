import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { SecurityConfig } from "types";
import { configApi } from "services";

interface SecurityContextType {
    config: SecurityConfig;
    loading: boolean;
    toggleXSSProtection: (enabled: boolean) => Promise<void>;
    refreshConfig: () => Promise<void>;
}


const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

const SecurityProvider = ({children}: { children: ReactNode }) => {
    const [config, setConfig] = useState<SecurityConfig>({
        xssProtection: false,
    });
    const [loading, setLoading] = useState(true);

    const refreshConfig = async () => {
        try {
            const data = await configApi.getConfig();
            setConfig(data);
        } catch (error) {
            console.error('Failed to fetch security config:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        void refreshConfig();
    }, []);

    const toggleXSSProtection = async (enabled: boolean) => {
        await configApi.updateXSSProtection(enabled);
        await refreshConfig();
    }

    return (
        <SecurityContext.Provider
            value={{config, loading, toggleXSSProtection, refreshConfig}}
        >
            {children}
        </SecurityContext.Provider>
    );
}

export {
    SecurityContext,
    SecurityProvider
};