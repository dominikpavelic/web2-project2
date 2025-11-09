import type { AdminData, Comment, SecurityConfig, User } from "types";

const users: User[] = [
    {id: 1, username: 'admin', password: 'admin123', role: 'admin', email: 'admin@mail.com'},
    {id: 2, username: 'pero', password: 'pero123', role: 'user', email: 'pero@mail.com'},
    {id: 3, username: 'ivo', password: 'ivo123', role: 'user', email: 'ivo@mail.com'}
];

const adminData: AdminData[] = [
    {id: 1, title: 'Povjerljiv admin dokument', content: 'Ovo su povjerljive informacije samo za administratore.'},
    {id: 2, title: 'Backup korisničke baze podataka', content: 'Podaci za pristup bazi: db_admin:super_secret_pass'}
]

const comments: Comment[] = [
    {id: 1, username: 'pero', text: 'Ovo je komentar', timestamp: new Date().toISOString()}
]


const securityConfig: SecurityConfig = {
    xssProtection: false,
    accessControlEnabled: false
}

export {
    comments,
    securityConfig,
    users,
    adminData
};