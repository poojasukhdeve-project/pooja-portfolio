import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pooja-portfolio/',   // <-- IMPORTANT: set this to your repo name
  plugins: [react()],
})
