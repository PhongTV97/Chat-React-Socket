import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyCLQtcO2Age0S0tshFLgwtxdND9DdU84RE",
  authDomain: "chat-react-nodejs.firebaseapp.com",
  projectId: "chat-react-nodejs",
  storageBucket: "chat-react-nodejs.appspot.com",
  messagingSenderId: "533380546435",
  appId: "1:533380546435:web:edb0233cdb472e9e8380b6",
  measurementId: "G-B8F6Y51GBP",
});

export const onSignupAccountEmailPassword = async (email, password) => {
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (res) {
      return res;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const onSigninAccountEmailPassword = async (email, password) => {
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    if (res) {
      return res;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const onSignoutAccountEmailPassword = async () => {
  try {
    await firebase.auth().signOut();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const onResetAccountPassword = async (email) => {
  try {
    const res = await firebase.auth().sendPasswordResetEmail(email);
    if (res) {
      return res;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const onUpdateProfile = async (body) => {
  try {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          await firebase.auth().currentUser.updateProfile(body);
          resolve(body);
        } else reject(null);
      });
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};
