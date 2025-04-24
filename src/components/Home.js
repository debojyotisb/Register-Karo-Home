import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      maxWidth: "1200px",
      margin: "auto",
      borderRadius: "8px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      position: "relative",
      backgroundColor: "#fff"
    }}>
      {/* Google Rating */}
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <span style={{ fontSize: "18px", fontWeight: "bold" }}>⭐ Google Rating</span>
        <span style={{ color: "#FFA500", fontSize: "18px" }}>★★★★★</span>
      </div>
      
      {/* Title */}
      <h1 style={{ fontSize: "32px", margin: "20px 0" }}>
        Your trusted partner <br/> for compliance business needs
      </h1>
      <p style={{ fontSize: "16px", color: "#555" }}>
        An online business compliance platform that helps entrepreneurs and other individuals
        with various <b>registrations, tax filings,</b> and other <b>legal matters.</b>
      </p>

      {/* Stats Section */}
      <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
        <div style={{
          background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
          padding: "10px 20px",
          borderRadius: "8px",
          color: "#fff"
        }}>
          <b>4.5+</b> Customer Rating ⭐
        </div>
        <div style={{
          background: "linear-gradient(90deg, #6a11cb, #2575fc)",
          padding: "10px 20px",
          borderRadius: "8px",
          color: "#fff"
        }}>
          <b>20,000+</b> Clients 👥
        </div>
      </div>

      {/* CTA Buttons */}
      <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
        <button style={{
          backgroundColor: "#1C4670",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>Talk to an Expert</button>

        <button style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#FF5733",
          fontSize: "16px"
        }}>
          ▶️ See how it works
        </button>
      </div>

      {/* Service Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginTop: "20px" }}>
        {["Annual Compliance", "Payroll Services", "Company Formation", "Annual Compliance"].map((service, index) => (
          <div key={index} style={{
            backgroundColor: "#fff",
            padding: "15px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center"
          }}>
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
