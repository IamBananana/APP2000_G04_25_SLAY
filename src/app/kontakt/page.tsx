"use client";
import React, { useState } from "react";
import "./kontakt.css";
import { handleContactForm } from "@/src/actions/emailForm"; //WIP

const Kontakt: React.FC = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Handle form field changes
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const formDataObj = new FormData();
            formDataObj.append("name", formData.name);
            formDataObj.append("email", formData.email);
            formDataObj.append("message", formData.message);

            const response = await handleContactForm({}, formDataObj);

            if (response.success) {
                alert("Your message has been sent!");
                setFormData({ name: "", email: "", message: "" }); // Clear form fields
            } else {
                alert("Failed to send message");
            }
        } catch (error) {
            alert("An error occurred while sending the message");
        }
    };

    return (
        <div className="contact-page">
            <header className="contact-header-style">
                Vi ønsker å høre fra deg!
            </header>

            {/* CONTACT BUBBLES */}
            <div className="contact-bubble-grid">
                <div className="contact-bubble-element">
                    <div className="contact-bubble-font-style">
                        <h2>
                            Telefon
                            <img
                                src="/assets/IconCall.png"
                                alt="tlf icon"
                                className="contact-icon-style"
                            />
                        </h2>
                    </div>
                    <p className="element-info">
                        Kundeservice: (+47) 45382134 <br />
                        Klubbservice: (+47) 98345112 <br />
                        Åpningstider: Man - Fre (10:00 - 15:00)
                    </p>
                </div>

                <div className="contact-bubble-element">
                    <div className="contact-bubble-font-style">
                        <h2>
                            Email
                            <img
                                src="/assets/IconEmail.png"
                                alt="email icon"
                                className="contact-icon-style"
                            />
                        </h2>
                    </div>
                    <p className="element-info">
                        kundeservice_teetime@outlook.com <br />
                        klubbservice_teetime@outlook.com <br />
                        media_teetime@outlook.com
                    </p>
                </div>

                <div className="contact-bubble-element">
                    <div className="contact-bubble-font-style">
                        <h2>
                            Lokasjon
                            <img
                                src="/assets/IconLocation.png"
                                alt="location icon"
                                className="contact-icon-style"
                            />
                        </h2>
                    </div>
                    <p className="element-info">
                        TeeTime HQ <br />
                        Gullbringvegen 36 <br />
                        3800, Bø I Telemark, NO <br />
                    </p>
                </div>
            </div>

            {/* CONTACT FORM */}
            <div className="contact-form-container">
                <div className="contact-form-header">
                    <h2>Kontaktskjema</h2>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-form-group">
                        <label htmlFor="name">Navn</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Skriv ditt navn"
                            value={formData.name}
                            onChange={handleInputChange}
                            autoComplete="name"
                        />
                    </div>

                    <div className="contact-form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Din email adresse"
                            value={formData.email}
                            onChange={handleInputChange}
                            autoComplete="email"
                        />
                    </div>

                    <div className="contact-form-group">
                        <label htmlFor="message">Melding</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Skriv din melding"
                            value={formData.message}
                            onChange={handleInputChange}
                            autoComplete="off"
                        ></textarea>
                    </div>

                    <div className="form-button-center">
                        <button type="submit" className="contact-submit-button">
                            Send inn
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Kontakt;
