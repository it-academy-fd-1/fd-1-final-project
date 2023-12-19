import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                category: resolve(__dirname, 'pages/category/category.html')
            }
        }
    }
});
