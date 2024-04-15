import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as packageJson from './package.json';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/components/'],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve('src', 'main'),
      name: 'Optimus Design System',
      formats: ['es', 'umd'],
      fileName: (format) => `optimus-design-system.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  }
})
