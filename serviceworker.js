/* https://www.youtube.com/watch?v=ksXwaWHCW6k*/

const cacheName ='new';

const cacheAssets=[
  'index.html',
  'styles.css',
  'app.js'
];
// Install Event
self.addEventListener('install', (e) =>{
  console.log('Service Worker: Installed');
e.waitUntil(
  caches
    .open('cacheName')
    .then(cache => {
      console.log('Service Worker: Caching Files');
      cache.addAll(cacheAssets);
    })
    .then(() => self.skipWaiting())
  );
});
// Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if(cache !== cacheName){
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
    })
  ); 
})
);
});
// Fetch Event 

self.addEventListener('fetch', (e) => {
    console.log('Service Worker: Fetching');
   e.respondWith(
     fetch(e.request).catch(() => caches.match(e.request)));
});
