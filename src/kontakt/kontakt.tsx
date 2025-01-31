import React from "react";
import "./kontakt.css";

const Kontakt: React.FC = () => {
  return (
    <div className="contact-page">
      <header className="header">
        <h1 className="title">Vi ønsker å høre fra deg</h1>
      </header>

        <div className="sections">
          <div className="section">
            <div className="skriftstil">
                <h2>Bruker</h2>
            </div>
            <p>
              Adresse:
              <br />
              Gullbringvegen 30
              <br />
              0666, Bo I Telemark
            </p>
            <p>
              Telefon: +47 46 32 43 57
              <br />
              Email: kontakt@teetime.no
            </p>
          </div>

          <div className="section">
            <div className="skriftstil">
                <h2>Klubb</h2>
            </div>
            <p>
              Har du spørsmål vedrørende din klubb?
              <br />
              Ved ønske om registrering av ny klubb eller generell hjelp med klubbens sider ber vi dem vennligst kontakte oss på:
              <br /><br />
              <p>
                Email: klubb@teetime.no
                </p>
            </p>
          </div>

          <div className="section">
            <div className="skriftstil">
                <h2>Media</h2>
            </div>
            <p>
              For alle henvendelser relatert til media, presse og sponsorskap ber vi dem vennligst kontakte oss på:
              <br /><br />
              Email: media@teetime.no
            </p>
          </div>
        </div>

        <div className="form-container">
  <div className="form-section">
    <div className="head">
      <h2>Kontaktskjema</h2>
    </div>
    <form className="form">
      <div className="form-group">
        <label htmlFor="name">Navn</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Melding</label>
        <textarea id="message" name="message"></textarea>
      </div>
      <button type="submit" className="submit-button">
        Send inn
      </button>
    </form>
  </div>
</div>
</div>
  );
};

export default Kontakt;