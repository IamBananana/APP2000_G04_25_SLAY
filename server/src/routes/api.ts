import { Router, Request, Response } from 'express';
import { supabase } from '../db';  // Import supabase from db.ts

const router = Router();

// ✅ Change from GET to POST
router.post('/register', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    // Insert the user into Supabase
    const { data, error } = await supabase.from('users').insert([{ username, email, password }]);

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ success: false, message: error.message });
    }

    return res.json({ success: true, data });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

export default router;
