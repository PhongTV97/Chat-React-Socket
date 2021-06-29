import { pushNotification } from "../firebase/index.js";

export const onSendNotification = async (req, res, next) => {
  pushNotification();
  res.status(200).json({ message: "onSendNotification!" });
};

export const onSubscribeToTopic = async (req, res, next) => {
  res.status(200).json({ message: "onSubscribeToTopic!" });
};
