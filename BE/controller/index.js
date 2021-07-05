import { pushNotification } from "../firebase/index.js";
import {
  onSigninAccountEmailPassword,
  onSignoutAccountEmailPassword,
  onSignupAccountEmailPassword,
  onResetAccountPassword,
  onUpdateProfile,
} from "../firebase/authentication.js";

export const onSendNotification = async (req, res, next) => {
  pushNotification();
  res.status(200).json({ message: "onSendNotification!" });
};

export const onSubscribeToTopic = async (req, res, next) => {
  res.status(200).json({ message: "onSubscribeToTopic!" });
};

export const onSignupAccountEmailPasswordController = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const result = await onSignupAccountEmailPassword(email, password);
    if (result) {
      res.status(200).json({
        message: "Signup Account Successfully!",
        data: { email, password },
      });
    } else throw Error();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error!",
      code: "E000",
    });
  }
};

export const onSigninAccountEmailPasswordController = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const result = await onSigninAccountEmailPassword(email, password);
    if (result) {
      res.status(200).json({
        message: "Signin Account Successfully!",
        data: {
          // email: result.user.email,
          // displayName: result.user.displayName,
          // phoneNumber: result.user.phoneNumber,
          // photoURL: result.user.photoURL,
          // refreshToken: result.user.stsTokenManager.refreshToken,
          // accessToken: result.user.stsTokenManager.accessToken,
          // expirationTime: result.user.stsTokenManager.expirationTime,
          ...result,
        },
      });
    } else throw Error();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error!",
      code: "E000",
    });
  }
};

export const onSignoutAccountEmailPasswordController = async (req, res) => {
  try {
    const result = await onSignoutAccountEmailPassword();
    if (result) {
      res.status(200).json({
        message: "Signout Successfully!",
      });
    } else throw Error();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error!",
      code: "E000",
    });
  }
};

export const onResetPasswordController = async (req, res) => {
  try {
    const email = req.body.email;
    const result = await onResetAccountPassword(email);
    if (result) {
      res.status(200).json({
        message: "Signout Successfully!",
      });
    } else throw Error();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error!",
      code: "E000",
    });
  }
};

export const onUpdateProfileController = async (req, res) => {
  try {
    const user = {
      displayName: req.body.user.displayName,
      photoURL: req.body.user.photoURL,
      phoneNumber: req.body.user.phoneNumber,
    };

    const result = await onUpdateProfile(user);
    if (result) {
      res.status(200).json({
        message: "Update profile successfully!",
        data: result,
      });
    } else throw Error();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error!",
      code: "E000",
    });
  }
};
