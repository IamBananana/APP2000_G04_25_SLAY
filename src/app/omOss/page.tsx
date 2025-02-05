import "./omOss.css";

import React from "react";

const OmOss: React.FC = () => {
    return (
        <div className="om-oss-container">
            {/* Header */}
            <header className="om-oss-header">
                <h1>Om oss</h1>
            </header>
            <main className="om-oss-main">
                <section className="om-oss-section">
                    <h2>Vår Historie</h2>
                    <p>
                        TeeTime startet som en lidenskap for discgolf og en idé
                        om å gjøre discgolf mer tilgjengelig for alle. Vi er et
                        team av discgolfentusiaster som ønsker å bygge et
                        fellesskap for både nybegynnere og erfarne spillere.
                    </p>
                </section>

                <section className="om-oss-section">
                    <h2>Hva Vi Tilbyr</h2>
                    <ul>
                        <li>📌 Informasjon om discgolfbaner og turneringer</li>
                        <li>📖 Artikler og tips for å forbedre spillet ditt</li>
                        <li>🕒 Muligheten til å reservere starttider enkelt</li>
                        <li>🤝 Et aktivt fellesskap for golfentusiaster</li>
                    </ul>
                </section>

                <section className="om-oss-section">
                    <h2>Vårt Team</h2>
                    <p>
                        Vi er en gruppe lidenskapelige mennesker som elsker
                        discgolf og teknologi. Sammen ønsker vi å revolusjonere
                        måten discgolf oppleves digitalt.
                    </p>
                </section>
            </main>
        </div>
    );
};

export default OmOss;
