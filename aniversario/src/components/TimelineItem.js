import React, { useEffect, useRef, useState } from "react";
import ImagenRecuerdo from "./ImagenRecuerdo";

function TimelineItem({ fecha, recuerdo, id, lado }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // se activa cuando 30% del item es visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`timeline-item ${lado} ${visible ? "fade-in" : "fade-out"}`}
    >
      <div className="timeline-content">
        <ImagenRecuerdo id={id} recuerdo={recuerdo} />
        <h3 className="timeline-title">{recuerdo}</h3>
        <p className="timeline-date">📅 {fecha}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
