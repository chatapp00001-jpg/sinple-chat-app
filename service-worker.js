importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyB1kH5ViWhVpwJMaQEY0mcJhtEOia1k2aE",
  authDomain: "chat-2d825.firebaseapp.com",
  projectId: "chat-2d825",
  messagingSenderId: "397345569962",
  appId: "1:397345569962:web:bac031c0cf9a394820a4d3"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const APP_VERSION = "1.0.0";

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'GET_VERSION') {
    event.source.postMessage({ version: '1.0.0' }); // <-- current version
  }
});

messaging.onBackgroundMessage(payload => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/chat.png",
    badge: "/chat.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
