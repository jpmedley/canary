LOG_PREFIX = "[SERVICE CLIENT]";
WORKER_SCOPE = { scope: './'};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("service-worker.js", { scope: './'}).then(
    function(registration) {
      console.log(registration);
      if (registration.installing) {
        registration.installing.addEVentListener('statechange', function(event) {
          if (event.target.state == 'installed') {
          }
	  if (event.target.state == 'activated') {
          }
        });
      }
    },
    function(error) {
      console.error(`${LOG_PREFIX} Service Worker registration failed:` error);
  });
}
