import express, { Request, Response } from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 5000;

// Enable CORS for specific origins and allow preflight requests
app.use(cors({
  origin: '*', // Allow requests from the frontend
  methods: ['GET', 'POST', 'OPTIONS'], // Allow GET, POST, and OPTIONS methods (OPTIONS is for preflight)
  allowedHeaders: ['Content-Type'], // Allow Content-Type header
  credentials: true, // Allow cookies and credentials to be sent
}));

// Initialize Supabase client using environment variables
const supabase = createClient(
  process.env.SUPABASE_URL as string, 
  process.env.SUPABASE_ANON_KEY as string
);

// Middleware for parsing JSON
app.use(express.json());

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Express server!');
});

// Example route
app.get('/api/hello', (req: Request, res: Response) => {
  res.send({ message: 'Halla from Express!' });
});

// Handle user registration
app.post('/api/register', async (req: any, res: any) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Insert the new user into the "bruker" table
    const { data, error } = await supabase
      .from('bruker') // Your table name
      .insert([{ BrukerNavn: username, Epost: email, Passord: password }])
      .select()
      .single();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // Return the inserted user data
    res.status(201).json({ message: 'User registered successfully', data });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
