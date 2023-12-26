import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                signIn: resolve(__dirname, 'pages/sign-in/sign-in.html'),
                register: resolve(__dirname, 'pages/register/register.html')
            }
        }
    }
});
