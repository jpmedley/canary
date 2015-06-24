function stateListener(e) {
    console.log(e.target.state);
    listProperties(e.target.state);
}

function getServiceWorker(registration) {
    "use strict";
    //let serviceWorker;
    serviceWorker = null;
    if (registration.installing) {
        serviceWorker = registration.installing;
    } else if (registration.waiting) {
        serviceWorker = registration.waiting;
    } else if (registration.active) {
        serviceWorker = registration.active;
    }
    console.log(serviceWorker.state);
    return serviceWorker;
}
