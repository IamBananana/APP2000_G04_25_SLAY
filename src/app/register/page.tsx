"use client";
import React, { useState } from "react";
import logo from "@/public/assets/android-chrome-512x512.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { handleRegisterForm } from "@/src/actions/registerForm"; // server-side function
import "./Register.css";

const Register: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const router = useRouter();

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);

        try {
            const response = await handleRegisterForm({}, formData); // server-side handler
            if (response?.status === 201) {
                setMessage("User registered successfully");
                localStorage.setItem("user", JSON.stringify(response.data));
                setTimeout(() => {
                    router.push("/myProfile"); 
                }, 1000);
            } else {
                setMessage(response?.error || "An error occurred.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            id="wrapper"
            className="container col-md-5 d-flex flex-column justify-content-around align-items-center border border-success bg-light rounded p-5 mt-5"
            onSubmit={handleSubmit}
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

            <button
                className="btn btn-success btn-lg rounded-pill mt-3 mb-2 col-lg-3"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Registrering..." : "Registrer"}
            </button>

            {message && <div className="alert alert-info mt-3">{message}</div>}

            <div className="mb-4">
                Har du allerede bruker?{" "}
                <a href="/login" className="text-decoration-none">
                    Logg inn
                </a>
            </div>
        </form>
    );
};

export default Register;
