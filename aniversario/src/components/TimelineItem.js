import React, { useState } from "react";

const TimelineItem = ({ item, position }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className={`timeline-item ${position}`}>
      <div className="timeline-content">
        <p className="timeline-date">📅 {item.Fecha}</p>

        <img
          src={`/.netlify/functions/drive-proxy?id=${item.ID}`}
          alt={item.Recuerdo}
          className="timeline-image"
        />

        <button
          className="timeline-button"
          onClick={() => setShowOverlay(true)}
        >
          Mostrar recuerdo
        </button>
      </div>

      {showOverlay && (
        <div className="timeline-overlay" onClick={() => setShowOverlay(false)}>
          <div className="overlay-message">
            <p>{item.Recuerdo}</p>
            <button
              className="overlay-close"
              onClick={() => setShowOverlay(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelineItem;
