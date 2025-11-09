import type { Comment, SecurityConfig } from "types";

const comments: Comment[] = [
    {id: 1, username: 'pero', text: 'Ovo je komentar', timestamp: new Date().toISOString()}
]


const securityConfig: SecurityConfig = {
    xssProtection: false
}

export {
    comments,
    securityConfig
};