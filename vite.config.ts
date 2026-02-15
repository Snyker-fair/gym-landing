import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Silenciamos las advertencias de deprecación para evitar ruido en la consola
        // 'mixed-decls' se elimina si es obsoleta en tu versión de SASS
        silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-functions'],
        quietDeps: true,
      },
    },
  },
})