import React, { useEffect, useState } from "react";
import { getMasterListOfMemberships } from "../services/api";

const MasterListOfMembershipsPage = () => {
  const [memberships, setMemberships] = useState([]);

  useEffect(() => {
    const fetchMemberships = async () => {
      try {
        const data = await getMasterListOfMemberships();
        setMemberships(data);
      } catch (error) {
        console.error("Failed to fetch memberships", error);
      }
    };

    fetchMemberships();
  }, []);

  return (
    <div>
      <h2>Master List of Memberships</h2>
      <table>
        <thead>
          <tr>
            <th>Membership ID</th>
            <th>Name of Member</th>
            <th>Contact Number</th>
            <th>Contact Address</th>
            <th>Aadhar Card No</th>
            <th>Start Date of Membership</th>
            <th>End Date of Membership</th>
            <th>Status</th>
            <th>Amount Pending (Fine)</th>
          </tr>
        </thead>
        <tbody>
          {memberships.map((membership, index) => (
            <tr key={index}>
              <td>{membership.membershipId}</td>
              <td>{membership.name}</td>
              <td>{membership.contactNumber}</td>
              <td>{membership.contactAddress}</td>
              <td>{membership.aadharCardNo}</td>
              <td>{membership.startDate}</td>
              <td>{membership.endDate}</td>
              <td>{membership.status}</td>
              <td>{membership.amountPending}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MasterListOfMembershipsPage;
