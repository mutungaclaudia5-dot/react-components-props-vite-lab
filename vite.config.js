import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    isolate: true,
    // maxWorkers: 2, 
    globals: true,
    setupFiles: './src/__tests__/setup.jsx',
    poolOptions: {
      threads: {
        singleThread: true, // Forces tests to run sequentially in one thread
      },
    },
  }
})