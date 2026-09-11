// import React, { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("/.netlify/functions/excel-proxy")
//       .then(res => res.json())
//       .then(json => {
//         if (Array.isArray(json)) {
//           setData(json);
//         } else {
//           console.error("Respuesta inesperada:", json);
//           setData([]);
//         }
//       })
//       .catch(err => console.error("Error cargando Excel:", err));
//   }, []);

//   return (
//     <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
//       <h1 style={{ textAlign: "center" }}>Cronograma de Recuerdos</h1>

//       {data.length === 0 && (
//         <p style={{ textAlign: "center", color: "red" }}>
//           No se encontraron recuerdos o hubo un error al cargar el Excel.
//         </p>
//       )}

//       {data.map((item, index) => (
//         <div
//           key={index}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             marginBottom: "20px",
//             borderBottom: "1px solid #ccc",
//             paddingBottom: "10px"
//           }}
//         >
//           <img
//             src={`/.netlify/functions/drive-proxy?id=${item.ID}`}
//             alt={item.Recuerdo}
//             style={{
//               width: "150px",
//               height: "150px",
//               objectFit: "cover",
//               borderRadius: "8px",
//               marginRight: "20px"
//             }}
//           />
//           <div>
//             <h3 style={{ margin: "0 0 5px 0" }}>{item.Recuerdo}</h3>
//             <p style={{ margin: 0, color: "#555" }}>📅 {item.Fecha}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

import  { useState } from "react";
import IntroPage from "./pages/IntroPage";
import Home from "./pages/Home";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Si quieres que la intro se muestre solo la primera vez, puedes guardar en localStorage
  // useEffect(() => {
  //   const seenIntro = localStorage.getItem("seenIntro");
  //   if (seenIntro) setShowIntro(false);
  // }, []);

  const handleSkipIntro = () => {
    setShowIntro(false);
    // localStorage.setItem("seenIntro", "true"); // opcional
  };

  return (
    <>
      {showIntro ? (
        <IntroPage onSkip={handleSkipIntro} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
