function listProperties(obj) {
    console.log(obj.constructor + ":");
    for(var propName in obj) {
        if(typeof(obj[propName]) != "undefined") {
            propVal = obj[propName];
            // console.log(`  ${propName} = ${propVal}`);
            console.log("  " + propName + " = " + propVal);
        }
    }
}

function stateListener(e) {
    console.log(e.target.state);
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
