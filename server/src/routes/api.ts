// src/routes/api.ts
import express, { Request, Response } from 'express';

const router = express.Router();

// Register route handler
router.post('/register', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    // Add your registration logic here, e.g., saving to a database
    // For example, you might use Supabase or another database service

    // Sending a successful response
    res.status(200).json({ message: 'Registration successful', data: { username, email } });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Something went wrong during registration' });
  }
});

export default router;
  