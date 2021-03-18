importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyAJLTXalZBD4uKq6flqCKDZCx5XQRaoNhA",
    authDomain: "pinterest-307622.firebaseapp.com",
    projectId: "pinterest-307622",
    storageBucket: "pinterest-307622.appspot.com",
    messagingSenderId: "1019446873539",
    appId: "1:1019446873539:web:e86910f2a9c101c1334176",
    measurementId: "G-107E4KLQDV"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true,
        })
        .then((windowClients) => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const notificationTitle = payload.notification.title;
            const notificationOptions = {
                body: payload.notification.body,
            };
            self.registration.showNotification(notificationTitle,
                notificationOptions);
        });
    return promiseChain;
});
self.addEventListener("notificationclick", function (event) {
    console.log(event);
});