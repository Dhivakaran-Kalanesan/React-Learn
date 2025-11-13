import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/React-Learn/Week-1-React-Basics/Challenge-1-Hello-React-UI/', // ✅ important
})
