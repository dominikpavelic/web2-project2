interface User {
    id: number;
    username: string;
    password: string;
    role: 'admin' | 'user';
    email: string;
}

export type { User };