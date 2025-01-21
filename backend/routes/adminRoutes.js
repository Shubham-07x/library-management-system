const express = require("express");
const {
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/adminController");

const router = express.Router();

// Route to add a new user
router.post("/addUser", addUser);

// Route to update an existing user
router.put("/updateUser/:id", updateUser);

// Route to delete a user
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
