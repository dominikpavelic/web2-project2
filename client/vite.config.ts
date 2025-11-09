import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],

    resolve: {
        alias: {
            pages: '/src/pages',
            components: '/src/components',
            services: '/src/services',
            contexts: '/src/contexts',
            hooks: '/src/hooks',
            types: '/src/types',
        }
    }
})
