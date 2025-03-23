import express from 'express';
import { signup, login, } from '../controllers/userController.js';
import { protectedRoute, getMe } from '../controllers/protectedController.js';
import verifyToken from '../middleware/verify.js';

const router = express.Router();

// Route for user signup
router.post('/signup', signup);

// Route for user login
router.post('/login', login);

// Protected route
router.get('/data', protectedRoute);

router.get("/me", verifyToken, getMe);

export default router;