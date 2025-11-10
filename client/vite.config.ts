import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    build: {
        outDir: 'dist',
        emptyOutDir: true
    },
    server: {
        proxy: {
            '/api': {
                target: process.env.VITE_API_URL || 'http://localhost:3000',
                changeOrigin: true,
            }
        }
    },

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
