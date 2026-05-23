/* Workout PWA — service worker. Cache-first for shell assets. */
const CACHE_VERSION = 'workout-b2-v1-2026-05-22';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // Cache-first for shell assets
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((resp) => {
      if (resp && resp.status === 200 && resp.type === 'basic') {
        const clone = resp.clone();
        caches.open(CACHE_VERSION).then((c) => c.put(req, clone));
      }
      return resp;
    }))
  );
});
