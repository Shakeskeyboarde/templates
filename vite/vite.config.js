import react from '@vitejs/plugin-react';
import reload from 'vite-plugin-full-reload';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reload('**'), react()],
  server: { hmr: false }
});
