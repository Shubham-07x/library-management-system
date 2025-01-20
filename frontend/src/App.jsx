import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import AdminLoginPage from "./components/AdminLoginPage";
import AdminHomePage from "./components/AdminHomePage";
import UserHomePage from "./components/UserHomePage";
import TransactionsPage from "./components/TransactionsPage";
import ReportsPage from "./components/ReportsPage";
import MasterListOfBooksPage from "./components/MasterListOfBooksPage";
import MasterListOfMembershipsPage from "./components/MasterListOfMembershipsPage";
import ActiveIssuesPage from "./components/ActiveIssuesPage";
import OverdueReturnsPage from "./components/OverdueReturnsPage";
import IssueRequestsPage from "./components/IssueRequestsPage";
import HousekeepingPage from "./components/HousekeepingPage";
import AddMembershipPage from "./components/AddMembershipPage";
import UpdateMembershipPage from "./components/UpdateMembershipPage";
import AddBookPage from "./components/AddBookPage";
import UpdateBookPage from "./components/UpdateBookPage";
import UserManagementPage from "./components/UserManagementPage";
import TransactionCancelledPage from "./components/TransactionCancelledPage";
import TransactionCompletedPage from "./components/TransactionCompletedPage";
import LogoutPage from "./components/LogoutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/user" element={<UserHomePage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/books" element={<MasterListOfBooksPage />} />
        <Route path="/memberships" element={<MasterListOfMembershipsPage />} />
        <Route path="/active-issues" element={<ActiveIssuesPage />} />
        <Route path="/overdue-returns" element={<OverdueReturnsPage />} />
        <Route path="/issue-requests" element={<IssueRequestsPage />} />
        <Route path="/housekeeping" element={<HousekeepingPage />} />
        <Route path="/add-membership" element={<AddMembershipPage />} />
        <Route path="/update-membership" element={<UpdateMembershipPage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="/update-book" element={<UpdateBookPage />} />
        <Route path="/user-management" element={<UserManagementPage />} />
        <Route
          path="/transaction-cancelled"
          element={<TransactionCancelledPage />}
        />
        <Route
          path="/transaction-completed"
          element={<TransactionCompletedPage />}
        />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
