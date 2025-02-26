"use server";
import supabase from "@/src/utils/supabase";
import dotenv from "dotenv";

dotenv.config();

export async function handleLoginForm(prevState: unknown, formData: FormData) {
    console.log("SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

    const username = formData.get("username"); // the user-provided email
    const password = formData.get("password"); // the user-provided password

    // Debug logs
    console.log("Username:", username);
    console.log("Password:", password);

    try {
        if (!username || !password) {
            console.error("Missing username or password");
            return { error: "All fields are required.", status: 400 };
        }

        // Query the database to find the user by email (Epost)
        const { data, error } = await supabase
            .from("bruker")
            .select("BrukerNavn, Epost, Passord, BrukerID") //Ta med BrukerID er midlertidig fix. Kanskje gjør epost til PK?
            .eq("Epost", username)
            .single();

        // If no user is found or there was an error
        if (error || !data) {
            console.error("Error or no data found:", error);
            return { error: "Invalid credentials", status: 401 };
        }

        console.log("Database Response:", data);

        // Compare password
        if (data.Passord !== password) {
            console.error("Password mismatch");
            return { error: "Invalid credentials", status: 401 };
        }

        return { message: "Login successful", data, status: 200 };
    } catch (err: unknown) {
        console.error("Server error:", err);
        return { error: `Internal Server Error ${err}`, status: 500 };
    }
}
