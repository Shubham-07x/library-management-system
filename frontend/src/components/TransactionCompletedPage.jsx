import React from "react";
import { useNavigate } from "react-router-dom";

const TransactionCompletedPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h2>Transaction Completed Successfully</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default TransactionCompletedPage;
