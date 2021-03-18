import firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
     messagingSenderId: "1019446873539",
     apiKey: "AIzaSyAJLTXalZBD4uKq6flqCKDZCx5XQRaoNhA",
     authDomain: "pinterest-307622.firebaseapp.com",
     projectId: "pinterest-307622",
     storageBucket: "pinterest-307622.appspot.com",
     appId: "1:1019446873539:web:e86910f2a9c101c1334176",
     measurementId: "G-107E4KLQDV"
});
const messaging = initializedFirebaseApp.messaging();
export { messaging };