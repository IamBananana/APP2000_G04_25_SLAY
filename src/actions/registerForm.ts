"use server";
import { NextResponse } from "next/server";
import supabase from "@/src/utils/supabase";

export async function handleRegisterForm(
    prevState: unknown,
    formData: FormData
) {
    //TODO implement handleRegisterForm
    try {
        const { username, email, password } = await request.json();

        if (!username || !email || !password) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        // Insert new user into "bruker" table
        const { data, error } = await supabase
            .from("bruker")
            .insert([{ BrukerNavn: username, Epost: email, Passord: password }])
            .select()
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json(
            { message: "User registered successfully", data },
            { status: 201 }
        );
    } catch (err: unknown) {
        return NextResponse.json(
            { error: `Internal Server Error ${err}` },
            { status: 500 }
        );
    }
}
