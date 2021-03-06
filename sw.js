let cacheName = 'R-P-S_cache';
let filesToCache = [
  '/',
  'index.html',
  'style.css',
  '/js/main.js',
  'script.js',
  'sessiors.png',
  'paper.jpg',
  'Stone.png'
  'css/bootstrap.min.css'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
