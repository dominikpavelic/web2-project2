interface User {
    id: number;
    username: string;
    role: 'admin' | 'user';
    email: string;
}

declare module 'express-session' {
    interface SessionData {
        user?: User
    }
}

export type { User };