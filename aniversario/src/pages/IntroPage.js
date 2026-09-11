import React from "react";
import Intro from "../components/Intro";

function IntroPage({ onSkip }) {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px" }}>
      <Intro onSkip={onSkip} />
    </div>
  );
}

export default IntroPage;
