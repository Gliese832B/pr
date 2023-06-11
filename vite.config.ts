import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

import solidPlugin from 'vite-plugin-solid';
import pagesPlugin from 'vite-plugin-pages';

export default defineConfig({
    plugins: [solidPlugin(), pagesPlugin()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
