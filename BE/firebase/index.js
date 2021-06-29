import firebase from "firebase-admin";
import { configJsonFirebase } from "./serviceAccountKey.js";
firebase.initializeApp({
  credential: firebase.credential.cert(configJsonFirebase),
  databaseURL: "https://play-game-stock.firebaseio.com",
});

export const pushNotification = () => {
  var fcm_token =
    "f2Z-0D1ZukYvt9vxQP-o0r:APA91bEafoRSuh-vYv1aZ0Q2HZxE579W73Wm1rUXp3HCQS6S3jCw5YAV_5VzO0_6zWV-hE2Dod_8T-zzaGx8WsoCfXEbYaK0ndS11KwyWqE0zGkew8u2nVqxqjNdwhpo96ECFFvJovhi";
  let payload = {
    notification: {
      title: "Welcome to Game Stock!",
      body: "Welcome to Game Stock!",
    },
    data: {
      title: "Welcome to My Group",
      message: "You have new messages",
    },
  };

  const options = {
    priority: "high",
    timeToLive: 60 * 60 * 24,
  };

  firebase
    .messaging()
    .sendToDevice(fcm_token, payload, options)
    .then((res) => console.log("res", res))
    .catch((err) => console.log("err", err));
};
