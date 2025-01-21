const express = require("express");
const {
  getReports,
  getMasterListOfBooks,
  getMasterListOfMemberships,
  getActiveIssues,
  getOverdueReturns,
  getIssueRequests,
} = require("../controllers/reportsController");

const router = express.Router();

// Route to get all reports
router.get("/", getReports);

// Route to get master list of books
router.get("/masterListOfBooks", getMasterListOfBooks);

// Route to get master list of memberships
router.get("/masterListOfMemberships", getMasterListOfMemberships);

// Route to get active issues
router.get("/activeIssues", getActiveIssues);

// Route to get overdue returns
router.get("/overdueReturns", getOverdueReturns);

// Route to get issue requests
router.get("/issueRequests", getIssueRequests);

module.exports = router;
