import { useState } from "react";
import IntroPage from "./pages/IntroPage";
import Home from "./pages/Home";
import "./App.css"

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleSkipIntro = () => {
    setShowIntro(false);
    // localStorage.setItem("seenIntro", "true"); // opcional
  };


  return (
    <>
      <div className="background-animation">
        {Array.from({ length: 10 }).map((_, i) => (
          <h1
            key={i}
            src="src\assets\icons\heart.png"
            alt="corazón"
            className="heart"
          >❤</h1>
        ))}
      </div>


     

      {showIntro ? (
        <IntroPage onSkip={handleSkipIntro} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
