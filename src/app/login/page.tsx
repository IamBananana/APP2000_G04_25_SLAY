"use client";
import React, { useState } from "react";
import logo from "@/public/assets/android-chrome-512x512.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { handleLoginForm } from "@/src/actions/loginForm"; // Server-side function

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!username || !password) {
            setMessage("Username and password are required.");
            return;
        }

        setIsSubmitting(true);

        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        try {
            const response = await handleLoginForm({}, formData); // Server-side handler
            if (response?.status === 200) {
                setMessage("Login successful");
                localStorage.setItem("user", JSON.stringify(response.data));
                setTimeout(() => {
                    router.push("/myProfile"); // Redirect to user profile page
                }, 1000);
            } else {
                setMessage(response?.error || "Invalid credentials.");
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
                <p className="display-6 mb-0 fs-2 fw-normal">Velkommen</p>
                <p className="display-12">Its TeeTime</p>
            </div>

            <div className="form-floating mb-3">
                <input
                    id="inpBrukernavn"
                    name="username"
                    className="form-control rounded-pill"
                    type="email"
                    placeholder="Brukernavn"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="inpBrukernavn">Brukernavn</label>
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
                {isSubmitting ? "Logging in..." : "Login"}
            </button>

            {message && <div className="alert alert-info mt-3">{message}</div>}

            <div className="mb-4">
                <a href="#" className="text-decoration-none">
                    Glemt passord?
                </a>
            </div>

            <div>
                Har du ikke bruker?{" "}
                <a href="/register" className="text-decoration-none">
                    Registrer deg!
                </a>
            </div>
        </form>
    );
};

export default Login;
