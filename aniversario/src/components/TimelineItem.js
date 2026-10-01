import React, { useState } from "react";

const TimelineItem = ({ item, index }) => {
  const [showOverlay, setShowOverlay] = useState(false);


  return (
    <>
    <div className={`timeline-item ${index % 2 === 0 ? "left tilt-left" : "right tilt-right"}`}>
  <div className="timeline-card">
    <div className="timeline-image-container">
      <img
        src={`/.netlify/functions/drive-proxy?id=${item.ID}`}
        alt={item.Recuerdo}
        className="timeline-image"
      />
      <div className="timeline-hover">
        <button
          className="timeline-button"
          onClick={() => setShowOverlay(true)}
        >
          Ver recuerdo
        </button>
      </div>
    </div>
    <p className="timeline-date">{item.Fecha}</p>
  </div>
  </div>

  {/* Overlay debe ir aquí, fuera del card */}
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
</>

  );
};

export default TimelineItem;
