import React, { useEffect, useState } from "react";
import { getIssueRequests } from "../services/api";

const IssueRequestsPage = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchIssueRequests = async () => {
      try {
        const data = await getIssueRequests();
        setRequests(data);
      } catch (error) {
        console.error("Failed to fetch issue requests", error);
      }
    };

    fetchIssueRequests();
  }, []);

  return (
    <div>
      <h2>Issue Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Membership ID</th>
            <th>Name of Book/Movie</th>
            <th>Requested Date</th>
            <th>Request Fulfilled Date</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{request.membershipId}</td>
              <td>{request.bookOrMovie}</td>
              <td>{request.requestedDate}</td>
              <td>{request.requestFulfilledDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssueRequestsPage;
