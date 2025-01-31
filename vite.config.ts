import { defineConfig } from 'vite';
import connectHistoryApiFallback from 'connect-history-api-fallback';

export default defineConfig({
  server: {
    port: 3000,
    middlewareMode: true,
  },
  plugins: [
    {
      name: 'custom-middleware',
      configureServer(server) {
        server.middlewares.use(connectHistoryApiFallback({
          index: '/dist/index.html', // Ensure the correct path to index.html
          verbose: true,
        }));
      }
    }
  ],
});
