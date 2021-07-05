import express from "express";
import {
  onSendNotification,
  onSigninAccountEmailPasswordController,
  onSignupAccountEmailPasswordController,
  onSignoutAccountEmailPasswordController,
  onResetPasswordController,
  onUpdateProfileController,
} from "../controller/index.js";
import dotenv from "dotenv";
dotenv.config();

let router = express.Router();

router.post("/send-notification", onSendNotification);
router.post("/signup-account", onSignupAccountEmailPasswordController);
router.post("/signin-account", onSigninAccountEmailPasswordController);
router.post("/signout-account", onSignoutAccountEmailPasswordController);
router.post("/reset-pw", onResetPasswordController);
router.post("/update-profile", onUpdateProfileController);

export default router;
