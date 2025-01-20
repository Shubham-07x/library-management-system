import React, { useEffect, useState } from "react";
import { getReports } from "../services/api";

const ReportsPage = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const data = await getReports();
        setReports(data);
      } catch (error) {
        console.error("Failed to fetch reports", error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div>
      <h2>Reports</h2>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>{report.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReportsPage;
