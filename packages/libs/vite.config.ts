/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    server: {
      host: '0.0.0.0',
    },
    plugins: [react(), dts(), tsconfigPaths()],
    optimizeDeps: {
      exclude: ['ui'],
    },
  };
});
