import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Welcome to the Library Management System</h2>
      <div className="button-group">
        <button onClick={() => navigate("/login")}>Login as User</button>
        <button onClick={() => navigate("/admin-login")}>Login as Admin</button>
      </div>
    </div>
  );
};

export default LandingPage;
