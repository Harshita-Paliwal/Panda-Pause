const CACHE_NAME = 'panda-pause-cache-v1';
const urlsToCache = [
  '/',
  '/stopwatch.html',
  '/panda1.png',
  '/panda.png',
  '/click.mp3',
  '/icons/icon1.png',
  '/icons/icon2.png',
  '/manifest.json',
  '/service-worker.js'
];


self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
