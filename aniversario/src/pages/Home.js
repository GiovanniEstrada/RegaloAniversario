import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ErrorMessage from "../components/ErrorMessage";
import Timeline from "../components/Timeline";

function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/.netlify/functions/excel-proxy")
      .then(res => res.json())
      .then(json => {
        if (Array.isArray(json)) {
          setData(json);
        } else {
          setError(json.error || "Error desconocido");
        }
      })
      .catch(err => setError("Error cargando Excel: " + err.message));
  }, []);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <Header
        title="Cronograma de Recuerdos"
        subtitle="Momentos especiales en el tiempo"
      />
      {error && <ErrorMessage message={error} />}
      <Timeline data={data} />
    </div>
  );
}

export default Home;
