import { useContext } from "react";
import { SecurityContext } from "contexts";

const useSecurity = () => {
    const context = useContext(SecurityContext);
    if (context === undefined) {
        throw new Error('useSecurity must be used within a SecurityProvider');
    }
    return context;
}

export { useSecurity };