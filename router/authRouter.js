import express from 'express'
import {registerController, loginController, testController } from '../controllers/authController.js'
import { requireSignIn } from '../middleware/authMiddleware.js';

// router object
const router = express.Router()

// routing
// Register || Method POST
router.post('/register', registerController);

// Login || POST
router.post('/login', loginController);

// test route
router.get('/test', requireSignIn, testController)

export default router;