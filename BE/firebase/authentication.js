import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyCLQtcO2Age0S0tshFLgwtxdND9DdU84RE",
    authDomain: "chat-react-nodejs.firebaseapp.com",
    projectId: "chat-react-nodejs",
    storageBucket: "chat-react-nodejs.appspot.com",
    messagingSenderId: "533380546435",
    appId: "1:533380546435:web:edb0233cdb472e9e8380b6",
    measurementId: "G-B8F6Y51GBP"
})

export const signUpAccountEmailAndPassword = async (email, password) => {
    try {
        const res =  await firebase.auth().createUserWithEmailAndPassword(email, password);
        if(res){
            console.log(res);
            return res;
        }
    } catch (error) {
        console.log(error);
    }
}

export const signInAccountEmailAndPassword = async (email, password) => {
    try {
        const res =  await firebase.auth().signInWithEmailAndPassword(email, password);
        if(res){
            console.log(res);
            return res
        }
    } catch (error) {
        console.log(error);
    }
}


export const signOutAccountEmailAndPassword = async () =>{
    try {
       await firebase.auth().signOut();
    } catch (error) {
        console.log(error);
    }
}