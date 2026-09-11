import React from "react";

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
