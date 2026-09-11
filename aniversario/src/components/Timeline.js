import React from "react";
import TimelineItem from "./TimelineItem";
import "../styles/timeline.css";

function Timeline({ data }) {
  return (
    <div className="timeline-container">
      {/* Línea fija */}
      <div className="timeline-line"></div>

      {/* Recuerdos */}
      {data.map((item, index) => (
        <TimelineItem
          key={index}
          fecha={item.Fecha}
          recuerdo={item.Recuerdo}
          id={item.ID}
          lado={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
}

export default Timeline;
