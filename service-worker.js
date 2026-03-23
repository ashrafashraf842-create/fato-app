const CACHE_NAME = 'fato-v2';

const urlsToCache = [
  '/fato-app/',
  '/fato-app/index.html',
  '/fato-app/style.css',
  '/fato-app/script.js',
  '/fato-app/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
