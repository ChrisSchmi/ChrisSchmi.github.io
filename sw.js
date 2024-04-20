/*  Service Worker Experiment */
/*  Inspired by: https://www.google.de/_/chrome/newtab-serviceworker.js */
/*  Inspired by: https://www.sblum.de/progressive-web-apps  */
var FILES = [
  'manifest.json'
];

var BLACKLIST = [];
var CACHE_NAME = '20240420';
const OFFLINE_URL = '/offline.html';

self.addEventListener('install',
    (event) => {

        // Cache the offline page when installing the service worker
        event.waitUntil(
            fetch(OFFLINE_URL, { credentials: 'include' })
                .then(response => caches.open(CACHE_NAME).then(cache => {
                    cache.put(OFFLINE_URL, response);
                    cache.addAll(FILES);
                }
                ))
        );
    });

self.addEventListener('fetch', (event) => {

    if (event.request.mode === 'navigate') {
        return event.respondWith(fetch(event.request).catch(() => caches.match(OFFLINE_URL)));
    }

    // Passthrough for everything else
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        }).catch(ex => {
            console.log(ex);
        })
    );
});