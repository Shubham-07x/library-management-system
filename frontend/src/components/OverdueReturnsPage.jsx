import React, { useEffect, useState } from "react";
import { getOverdueReturns } from "../services/api";

const OverdueReturnsPage = () => {
  const [returns, setReturns] = useState([]);

  useEffect(() => {
    const fetchOverdueReturns = async () => {
      try {
        const data = await getOverdueReturns();
        setReturns(data);
      } catch (error) {
        console.error("Failed to fetch overdue returns", error);
      }
    };

    fetchOverdueReturns();
  }, []);

  return (
    <div>
      <h2>Overdue Returns</h2>
      <table>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Name of Book</th>
            <th>Membership ID</th>
            <th>Date of Issue</th>
            <th>Date of Return</th>
            <th>Fine Calculations</th>
          </tr>
        </thead>
        <tbody>
          {returns.map((returnItem, index) => (
            <tr key={index}>
              <td>{returnItem.serialNo}</td>
              <td>{returnItem.bookName}</td>
              <td>{returnItem.membershipId}</td>
              <td>{returnItem.dateOfIssue}</td>
              <td>{returnItem.dateOfReturn}</td>
              <td>{returnItem.fineCalculations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OverdueReturnsPage;
