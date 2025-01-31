// src/server.ts
import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './routes/api'; // Import your router

const app = express();
const port = 5000;

app.use(bodyParser.json()); // Middleware to parse JSON request bodies

// Use the API routes
app.use('/api', apiRouter); // Prefix for all API routes

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
