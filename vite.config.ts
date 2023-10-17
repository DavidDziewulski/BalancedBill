import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import sassGlobImports from 'vite-plugin-sass-glob-import';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port:3000,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    sassGlobImports(),
    checker({
            typescript: true,
            eslint: {
                lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
            },
        }),
  ],
})
