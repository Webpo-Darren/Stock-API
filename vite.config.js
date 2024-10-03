import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/STOCK-API',
  test:{
    globals:true,
    environment:'happy-dom',
    setupFiles:'src/App.jsx',
  }
})
