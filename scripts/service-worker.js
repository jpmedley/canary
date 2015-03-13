LOG_PREFIX = "[SERVICE WORKER]";

self.addEventListener('install', function() {
  console.log(`${LOG_PREFIX} The install event was fired.`);
});

self.addEventListener('activate', function() {
  console.log(`${LOG_PREFIX} The activate event was fired.`);
}

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(
      //The response is already in the cache.
      function(response) {
        return response;
      },
      function() {
        //The response is not cached.
        return caches.get('cache-v1').then(function(cache) {
          return cache.add(e.request.url).then(function(response) {
            return response;
          });
        });
      }
    );
  );
});
