import React from "react";
import { useNavigate } from "react-router-dom";

const HousekeepingPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h2>Housekeeping</h2>
      <nav>
        <button onClick={() => navigate("/add-membership")}>
          Add Membership
        </button>
        <button onClick={() => navigate("/update-membership")}>
          Update Membership
        </button>
        <button onClick={() => navigate("/add-book")}>Add Book</button>
        <button onClick={() => navigate("/update-book")}>Update Book</button>
        <button onClick={() => navigate("/user-management")}>
          User Management
        </button>
      </nav>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HousekeepingPage;
