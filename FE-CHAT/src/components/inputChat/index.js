import React from "react";
import "./styles.css";

const InputChat = () => {
  return (
    <div className="input-chat">
      <input placeholder="Enter message ..." />
      <button style={{cursor: "pointer"}}>Send</button>
    </div>
  );
};

export default InputChat;


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyCLQtcO2Age0S0tshFLgwtxdND9DdU84RE",
//     authDomain: "chat-react-nodejs.firebaseapp.com",
//     projectId: "chat-react-nodejs",
//     storageBucket: "chat-react-nodejs.appspot.com",
//     messagingSenderId: "533380546435",
//     appId: "1:533380546435:web:edb0233cdb472e9e8380b6",
//     measurementId: "G-B8F6Y51GBP"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>