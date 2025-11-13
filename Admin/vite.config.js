import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ✅ Tailwind works without a separate plugin
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: { port: 5174 },
})