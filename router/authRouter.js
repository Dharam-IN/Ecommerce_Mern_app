import express from 'express'
import {registerController, loginController, testController, forgotpasswordcontroller } from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';

// router object
const router = express.Router()

// routing
// Register || Method POST
router.post('/register', registerController);

// Login || POST
router.post('/login', loginController);

// Forgot Password || POST

router.post('/forgot-password', forgotpasswordcontroller)

// test route
router.get('/test', requireSignIn, isAdmin, testController)

// protected route
router.get('/user-auth', requireSignIn, (req, res)=>{
    res.status(200).send({ok: true});
})

export default router;