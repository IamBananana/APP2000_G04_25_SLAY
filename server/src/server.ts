import express from 'express';
import apiRouter from './routes/api'; // Importer routeren fra api.ts

const app = express();
const port = 3000;

app.use(express.json());  // Middleware for å håndtere JSON
app.use('/api', apiRouter);  // Bruk api-ruten

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
