import browserEcho from '@browser-echo/vite';
import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import Icons from 'unplugin-icons/vite';
import { defineConfig, loadEnv, type ConfigEnv } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import { nitro } from 'nitro/vite';

export default ({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return defineConfig({
    server: {
      port: 3000,
    },
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      tanstackStart(),
      nitro(),
      react(),
      Icons({
        compiler: 'jsx',
        jsx: 'react',
      }),
      browserEcho({
        include: ['error', 'warn', 'info'],
        stackMode: 'condensed',
        tag: 'tanstack-start',
        showSource: true,
        fileLog: {
          enabled: false,
        },
      }),
      tailwindcss(),
    ],
  });
};
