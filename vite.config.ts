import {defineConfig, loadEnv} from 'vite';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetup from 'vite-plugin-vue-setup-extend';
// import { VITE_API_URL } from '@/utils/config.ts';

import { resolve } from 'path';
import process from 'process';

export default defineConfig(({ mode, command }) => {
  const env: Record<string, string> = loadEnv(mode, process.cwd());
  const { VITE_API_WEBSOCKET, VITE_API_URL, VITE_DEV_SERVER_PORT } = env;

  return {
    server: {
      port: Number(VITE_DEV_SERVER_PORT),
      cors: true,
      proxy: {
        '/api': {
          target: VITE_API_URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
        '/websocket/ws': {
          target: `ws://localhost:${VITE_API_WEBSOCKET}`,
          ws: true,
          secure: false,
          changeOrigin: true,
          headers: {},
        },
      },
    },
    plugins: [vue(), VueSetup()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       // 配置全局sass变量注入
    //       additionalData: `
    //             @import "@/assets/scss/global-variable.scss";
    //             @import "@/assets/scss/global-mixin.scss";
    //           `,
    //     },
    //   },
    // },
  };
});
