import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// غيّر 're-offers' لاسم الـ repository تبعك على GitHub
export default defineConfig({
  plugins: [react()],
  base: '/re-offers/',
})
