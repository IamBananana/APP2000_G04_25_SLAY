"use client";
import React, { useActionState, useEffect, useState } from "react";
import logo from "@/public/assets/android-chrome-512x512.png";
import Image from "next/image";
import { handleRegisterForm } from "@/src/actions/registerForm";
import "./Register.css";
import { redirect, useRouter } from "next/navigation"; // Use Next.js router
import { NextResponse } from "next/server";
import { matchesMiddleware } from "next/dist/shared/lib/router/router";

const Register: React.FC = () => {
    //TODO - Convert register API endpoint to use Server Actions
    //This is started for you below
    //const initialError = NextResponse.json({ message: "", data: null });

    const [formResponse, formAction, isSubmitting] = useActionState(
        handleRegisterForm,
        null
    );

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const router = useRouter(); // Next.js navigation

    console.log("Key: " + process.env.SUPABASE_URL);

    useEffect(() => {
        if (formResponse) {
            setMessage(JSON.stringify(formResponse.message));
            if (formResponse.status == 201) {
                //Wait one second, so the user can see feedback
            }
        }
    }, [formResponse]);

    return (
        <form
            action={formAction}
            id="wrapper"
            className="container col-md-5 d-flex flex-column justify-content-around align-items-center border border-success
                 bg-light rounded p-5 mt-5"
        >
            <Image src={logo} className="img w-25" alt="logo" />

            <div className="container text-center" style={{ color: "#000" }}>
                <p className="display-6 mb-0 fs-2 fw-normal">Registrer deg</p>
                <p className="display-12">Its TeeTime</p>
            </div>

            <div className="form-floating mb-3">
                <input
                    id="inpBrukernavn"
                    name="username"
                    className="form-control rounded-pill"
                    type="text"
                    placeholder="Brukernavn"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="inpBrukernavn">Brukernavn</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    id="inpEmail"
                    name="email"
                    className="form-control rounded-pill"
                    type="email"
                    placeholder="E-post"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="inpEmail">E-post</label>
            </div>

            <div className="form-floating mb-1">
                <input
                    id="inpPassord"
                    name="password"
                    className="form-control rounded-pill"
                    type="password"
                    placeholder="Passord"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="inpPassord">Passord</label>
            </div>

            <button className="btn btn-success btn-lg rounded-pill mt-3 mb-2 col-lg-3">
                Registrer
            </button>

            {message && <div className="alert alert-info mt-3">{message}</div>}

            <div className="mb-4">
                Har du allerede bruker?{" "}
                <a href="/login" className="text-decoration-none">
                    Logg inn
                </a>
                <p>{process.env.SUPABASE_URL}</p>
            </div>
        </form>
    );
};

export default Register;
