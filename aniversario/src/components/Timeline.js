import React from "react";
import TimelineItem from "./TimelineItem";
import { groupByYearMonth } from "../utils/groupByYearMonth";
import "../styles/timeline.css";

const MONTH_ORDER = [
  "enero","febrero","marzo","abril","mayo","junio",
  "julio","agosto","septiembre","octubre","noviembre","diciembre"
];

const Timeline = ({ data = [] }) => {
  const groupedData = groupByYearMonth(data);
  let globalIndex = 0;
  

  return (
    <div className="timeline-container">
      <svg className="timeline-line" viewBox="0 0 1000 2400" preserveAspectRatio="none">
        <path
          d="M 500 0 
             Q 800 400 500 800 
             Q 200 1200 500 1600 
             Q 800 2000 500 2400"
          stroke="#6b1d1d"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      <div className="timeline-items">

{Object.keys(groupedData).sort((a, b) => a - b).map(year => (
  <div key={year} className="timeline-year-block">
    <h2 className="timeline-year">{year}</h2>

    {Object.keys(groupedData[year])
      .sort((a, b) => MONTH_ORDER.indexOf(a) - MONTH_ORDER.indexOf(b))
      .map(month => (
        <div key={month} className="timeline-month-block">
          <h3 className="timeline-month">{month}</h3>

          {groupedData[year][month].map(item => {
            const position = globalIndex % 2 === 0 ? "left" : "right";
            globalIndex++;
            return (
              <TimelineItem
                key={globalIndex}
                item={item}
                position={position}
              />
            );
          })}
        </div>
      ))}
  </div>
))}

      </div>
    </div>
  );
};

export default Timeline;
