self.addEventListener('install', function (event) {
  self.skipWaiting();
  console.log('Service Worker installed');
});

self.addEventListener('activate', function (event) {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', function (event) {
  // Optional caching bisa ditambah di sini
});

self.addEventListener('push', function (event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || "Notification";
  const options = {
    body: data.body || "You have a new message!",
    icon: data.icon || "https://nixymine.pages.dev/nxmn.png",
    badge: data.badge || "https://nixymine.pages.dev/nxmn.png"
  };
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
