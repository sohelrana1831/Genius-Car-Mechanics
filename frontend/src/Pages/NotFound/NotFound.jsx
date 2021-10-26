import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/404.png";
const NotFound = () => {
  return (
    <div style={{ position: "relative" }}>
      <img src={notFound} alt="" />
      <Link
        to="/"
        style={{
          position: "absolute",
          top: "75vh",
          right: "90vh",
          textAlign: "center",
        }}
      >
        <button
          style={{
            padding: "10px 30px",
            backgroundColor: "#fff",
            border: "none",
            fontWeight: "bold",
            borderRadius: "10px",
          }}
        >
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
