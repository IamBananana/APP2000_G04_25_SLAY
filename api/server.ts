import express, { Request, Response } from "express";
import { VercelRequest, VercelResponse } from "@vercel/node"; // ✅ Import Vercel types
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

// Enable CORS (Adjust for production)
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_ANON_KEY as string
);

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Express API!");
});

// Register route
app.post("/api/register", async (req: VercelRequest, res: VercelResponse) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const { data, error } = await supabase
      .from("bruker")
      .insert([{ BrukerNavn: username, Epost: email, Passord: password }])
      .select()
      .single();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json({ message: "User registered successfully", data });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Correct export for Vercel
export default app;
