// registerForm.ts
"use server";
import supabase from "@/src/utils/supabase";
import dotenv from "dotenv";

dotenv.config();

export async function handleRegisterForm(
    prevState: unknown,
    formData: FormData
) {
    console.log("SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
        if (!username || !email || !password) {
            return { error: "All fields are required.", status: 400 };
        }

        // Insert new user into "bruker" table
        const { data, error } = await supabase
            .from("bruker")
            .insert([{ BrukerNavn: username, Epost: email, Passord: password }])
            .select()
            .single();

        if (error) {
            return { error: error.message, status: 400 };
        }

        return { message: "User registered successfully", data, status: 201 };
    } catch (err: unknown) {
        return { error: `Internal Server Error ${err}`, status: 500 };
    }
}
