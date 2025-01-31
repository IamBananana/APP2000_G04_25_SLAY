import express from 'express';

const app = express();
const port = 5000; // You can use a different port if needed

// Middleware to handle JSON request bodies
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
