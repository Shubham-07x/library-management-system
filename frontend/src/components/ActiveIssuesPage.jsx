import React, { useEffect, useState } from "react";
import { getActiveIssues } from "../services/api";

const ActiveIssuesPage = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const data = await getActiveIssues();
        setIssues(data);
      } catch (error) {
        console.error("Failed to fetch active issues", error);
      }
    };

    fetchIssues();
  }, []);

  return (
    <div>
      <h2>Active Issues</h2>
      <table>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Book/Movie</th>
            <th>Membership ID</th>
            <th>Date of Issue</th>
            <th>Date of Return</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue, index) => (
            <tr key={index}>
              <td>{issue.serialNo}</td>
              <td>{issue.bookMovie}</td>
              <td>{issue.membershipId}</td>
              <td>{issue.dateOfIssue}</td>
              <td>{issue.dateOfReturn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveIssuesPage;
