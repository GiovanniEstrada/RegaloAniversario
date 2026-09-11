import React from "react";

function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div
      style={{
        backgroundColor: "#ffe5e5",
        color: "#b00000",
        padding: "15px",
        borderRadius: "8px",
        margin: "20px 0",
        textAlign: "center",
        fontWeight: "bold"
      }}
    >
      ⚠️ {message}
    </div>
  );
}

export default ErrorMessage;
