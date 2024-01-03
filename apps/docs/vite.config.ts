/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, loadEnv } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // eslint-disable-next-line no-console
  console.log({ env, __dirname, __filename });

  return {
    server: {
      host: '0.0.0.0',
    },
    plugins: [react(), dts(), tsconfigPaths()],
  };
});
