import { defineConfig } from 'vite';
import connectHistoryApiFallback from 'connect-history-api-fallback';

// Vite-konfigurasjon
export default defineConfig({
  server: {
    middlewareMode: true,
  },
  plugins: [
    {
      name: 'custom-middleware',
      configureServer(server) {
        server.middlewares.use(connectHistoryApiFallback({
          index: '/index.html', // Pass på at du har en riktig index.html
          verbose: true,  // Slå på verbose for mer informasjon om hva som skjer
        }));
      }
    }
  ]
});
