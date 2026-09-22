import { useState, useRef } from "react";
import IntroPage from "./pages/IntroPage";
import Home from "./pages/Home";
import "./App.css"

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);

  const handleSkipIntro = () => {
    setShowIntro(false);
    // localStorage.setItem("seenIntro", "true"); // opcional
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <>
      <div className="background-animation">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className="heart"></span>
        ))}
      </div>

      {/* Audio ambiental global */}
      <audio ref={audioRef} autoPlay loop>
        <source src="/assets/audio/Reunited.mp3" type="audio/mp3" />
        Tu navegador no soporta audio.
      </audio>

      {/* Botón global de mute/unmute */}
      <button className="global-mute" onClick={toggleMute}>
        {muted ? "🔇" : "🔊"}
      </button>

      {showIntro ? (
        <IntroPage onSkip={handleSkipIntro} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
