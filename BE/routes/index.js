import express from 'express';
import {onSendNotification, onSignoutAccountEmailPassword, onSigninAccountEmailPassword, onSignupAccountEmailPassword} from '../controller/index.js'
import dotenv from 'dotenv'
dotenv.config()

let router = express.Router();

router.post('/send-notification', onSendNotification);
router.post('/signup-account', onSignupAccountEmailPassword)
router.post('/signin-account', onSigninAccountEmailPassword)
router.post('/signout-account', onSignoutAccountEmailPassword)

export default router;