import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductDetails } from "../services/api"; // Assuming you have an API function to fetch product details

const AdminHomePage = () => {
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await getProductDetails();
        setProductDetails(data);
      } catch (error) {
        console.error("Failed to fetch product details", error);
      }
    };

    fetchProductDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h2>Admin Home Page</h2>
      <nav>
        <button onClick={() => navigate("/reports")}>Reports</button>
        <button onClick={() => navigate("/transactions")}>Transactions</button>
        <button onClick={() => navigate("/housekeeping")}>Housekeeping</button>
      </nav>
      <section>
        <h3>Product Details</h3>
        <table>
          <thead>
            <tr>
              <th>Code No From</th>
              <th>Code No To</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {productDetails.map((product, index) => (
              <tr key={index}>
                <td>{product.codeNoFrom}</td>
                <td>{product.codeNoTo}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminHomePage;
