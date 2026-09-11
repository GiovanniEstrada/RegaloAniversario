import React from "react";

function Header({ title, subtitle }) {
  return (
    <header
      style={{
        textAlign: "center",
        padding: "20px",
        borderBottom: "2px solid #ccc",
        marginBottom: "20px"
      }}
    >
      <h1 style={{ margin: "0", fontSize: "2rem", color: "#333" }}>{title}</h1>
      {subtitle && (
        <p style={{ margin: "10px 0 0", fontSize: "1rem", color: "#666" }}>
          {subtitle}
        </p>
      )}
    </header>
  );
}

export default Header;
