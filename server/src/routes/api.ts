import { Request, Response } from 'express';
import { supabase } from '../db'; // Assuming Supabase is set up as you showed earlier

// Register a new user
export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Alle felt må fylles ut.' });
  }

  try {
    const { data, error } = await supabase
      .from('users')
      .insert([{ username, email, password }])
      .select();

    if (error) {
      return res.status(400).json({ message: 'Noe gikk galt ved registrering.', error: error.message });
    }

    const user = data[0]; // The inserted user
    return res.status(201).json(user);
  } catch (err) {
    console.error('Error registering user:', err);
    return res.status(500).json({ message: 'Internt serverfeil.' });
  }
};

// Get user profile by userId
export const getUserProfile = async (req: Request, res: Response) => {
  const userId = req.query.userId as string;

  if (!userId) {
    return res.status(400).json({ message: 'Bruker-ID er påkrevd.' });
  }

  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error || !data) {
      return res.status(404).json({ message: 'Bruker ikke funnet.' });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error('Error fetching user profile:', err);
    return res.status(500).json({ message: 'Internt serverfeil.' });
  }
};

// Update user password
export const updatePassword = async (req: Request, res: Response) => {
  const { userId, currentPassword, newPassword } = req.body;

  if (!userId || !currentPassword || !newPassword) {
    return res.status(400).json({ message: 'Alle felt må fylles ut.' });
  }

  try {
    // Fetch the user from Supabase to check the current password
    const { data, error } = await supabase
      .from('users')
      .select('password')
      .eq('user_id', userId)
      .single();

    if (error || !data) {
      return res.status(400).json({ message: 'Bruker ikke funnet.' });
    }

    if (data.password !== currentPassword) {
      return res.status(400).json({ message: 'Gammelt passord er feil.' });
    }

    // Update password
    const { error: updateError } = await supabase
      .from('users')
      .update({ password: newPassword })
      .eq('user_id', userId);

    if (updateError) {
      return res.status(400).json({ message: 'Feil ved oppdatering av passord.', error: updateError.message });
    }

    return res.status(200).json({ message: 'Passord oppdatert!' });
  } catch (err) {
    console.error('Error updating password:', err);
    return res.status(500).json({ message: 'Internt serverfeil.' });
  }
};

// Delete user account
export const deleteAccount = async (req: Request, res: Response) => {
  const userId = req.query.userId as string;

  if (!userId) {
    return res.status(400).json({ message: 'Bruker-ID er påkrevd.' });
  }

  try {
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('user_id', userId);

    if (error) {
      return res.status(400).json({ message: 'Feil ved sletting av konto.', error: error.message });
    }

    return res.status(200).json({ message: 'Konto slettet.' });
  } catch (err) {
    console.error('Error deleting account:', err);
    return res.status(500).json({ message: 'Internt serverfeil.' });
  }
};
