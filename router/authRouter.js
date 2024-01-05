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

// Protected User Route
router.get('/user-auth', requireSignIn, (req, res)=>{
    res.status(200).send({ok: true});
})

// Protected Admin Route
router.get('/admin-auth', requireSignIn, isAdmin, (req, res)=>{
    res.status(200).send({ok: true});
})

export default router;