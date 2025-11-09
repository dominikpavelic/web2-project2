interface SessionUser {
    id: number;
    username: string;
    role: 'admin' | 'user';
    email: string;
}

declare module 'express-session' {
    interface SessionData {
        user?: SessionUser
    }
}

export type { SessionUser };