const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const { registerUser, loginUser } = require("../controllers/authController");

// Middleware to check if the user is authenticated
router.use(authMiddleware.verifyToken);

// Route to get user profile
router.get("/profile", userController.getUserProfile);

// Route to update user profile
router.put("/profile", userController.updateUserProfile);

// Route for user registration
router.post("/register", registerUser);

// Route for user login
router.post("/login", loginUser);

module.exports = router;
