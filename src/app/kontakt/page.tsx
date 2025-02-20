import React from "react";
import "./kontakt.css";

const Kontakt: React.FC = () => {
    return (
        <div className="contact-page">
            <header className="contact-header-style">
                Vi ønsker å høre fra deg!
            </header>

            {/*KONTAKT TAVLE*/}
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
                        Klubb admin: (+47) 98345112 <br />
                        Åpningstider: Man - Fre (10:00 - 15:00)
                    </p>
                </div>

                <div className="contact-bubble-element">
                    <div className="contact-bubble-font-style">
                        <h2>
                            Email
                            <img
                                src="/assets/IconEmail.png"
                                alt="tlf icon"
                                className="contact-icon-style"
                            />
                        </h2>
                    </div>
                    <p className="element-info">
                        kundeservice@teetime.com <br />
                        klubbadmin@teetime.com <br />
                        media@teetime.com
                    </p>
                </div>

                <div className="contact-bubble-element">
                    <div className="contact-bubble-font-style">
                        <h2>
                            Lokasjon
                            <img
                                src="/assets/IconLocation.png"
                                alt="tlf icon"
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

            {/*KONTAKT SKJEMA*/}
            <div className="contact-form-container">
                <div className="contact-form-header">
                    <h2>Kontaktskjema</h2>
                </div>
                <form className="contact-form">
                    <div className="contact-form-group">
                        <label htmlFor="name"></label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Skriv ditt navn"
                        />
                    </div>

                    <div className="contact-form-group">
                        <label htmlFor="email"></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Din email adresse"
                        />
                    </div>
                    <div className="contact-form-group">
                        <label htmlFor="message"></label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Melding"
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
