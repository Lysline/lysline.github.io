/* https://www.youtube.com/watch?v=ksXwaWHCW6k*/

const cacheName ='me';

const cacheAssets=[
  'index.html',
  'styles.css',
  'app.js'
];
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
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
/*  e.waitUntil(
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
);*/
});

//Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  alert(bonjour);
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request)))
});
