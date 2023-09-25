import { defineConfig } from 'vite'
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
