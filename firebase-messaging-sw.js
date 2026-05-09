importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// ── ЗАМЕНИ НА СВОИ ДАННЫЕ ИЗ FIREBASE CONSOLE → PROJECT SETTINGS ──
firebase.initializeApp({
  apiKey: "AIzaSyD-g8jt-tPVkN1cKEC-8xwy2Q84tDliNrE",
  authDomain: "bort-30052.firebaseapp.com",
  databaseURL: "https://bort-30052-default-rtdb.firebaseio.com",
  projectId: "bort-30052",
  storageBucket: "bort-30052.firebasestorage.app",
  messagingSenderId: "857064505173",
  appId: "1:857064505173:web:de9dffa846b6cc1bef39dc"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || 'БОРТ', {
    body: body || 'Новая задача',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: 'bort-task',
    renotify: true,
    vibrate: [200, 100, 200]
  });
});
