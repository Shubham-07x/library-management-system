import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  React.useEffect(() => {
    handleLogout();
  }, []);

  return (
    <div>
      <h2>You have successfully logged out.</h2>
    </div>
  );
};

export default LogoutPage;
