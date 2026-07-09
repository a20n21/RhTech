import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Carrega as variáveis de ambiente (.env.development)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      port: 5173, // Fixa na porta padrão para não ficar pulando
      proxy: {
        '/api': {
          // Usa o localhost:3001 local se existir o arquivo .env, ou mantém o 'backend' se for no docker
          target: env.VITE_PROXY_TARGET || 'http://backend:3001',
          changeOrigin: true,
        },
      },
    },
  };
});
