import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// ...existing code...

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],

  // Add a path alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  // Your can change the env prefix here
  envPrefix: 'VITE',

  // Configure the proxy service
  server: {
    port: 8000,
    proxy: {
      '/api': {
        // The target change to your own server address
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
