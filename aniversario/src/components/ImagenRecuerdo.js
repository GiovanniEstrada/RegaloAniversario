import React from "react";
import "../styles/timeline.css";

function ImagenRecuerdo({ id, recuerdo }) {
  return (
    <img
      src={`/.netlify/functions/drive-proxy?id=${id}`}
      alt={recuerdo}
      className="timeline-image"
    />
  );
}

export default ImagenRecuerdo;
