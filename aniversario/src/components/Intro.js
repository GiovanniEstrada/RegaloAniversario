import React, { useState, useEffect } from "react";
import "../styles/intro.css";

function Intro({ onSkip }) {
    const frases = [
        "UN AÑO A TU LADO, MUCHAS ENSEÑANZAS Y MOMENTOS JUNTOS",
        "TU ERES MI PRINCESA... PRINCESA DE MIS CUENTOS ENCANTADOS",
        "CELEBREMOS NUESTRA HISTORIA, QUE ES LA QUE NOS HA TRAIDO HASTA DONDE ESTAMOS EL DIA DE HOY"
    ];

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % frases.length);
                setFade(true);
            }, 900);
        }, 6000);

        return () => clearInterval(interval);
    }, [frases.length]);

    return (
        <div className="intro-container">
            <div className="intro-heart">❤</div>
            <div className="intro-divider"></div>
            <p
                className="intro-text"
                style={{ opacity: fade ? 1 : 0 }}
            >
                {frases[index]}
            </p>

            <button className="intro-button" onClick={onSkip}>
                REVIVE LOS MOMENTOS
            </button>
        </div>
    );
}

export default Intro;
