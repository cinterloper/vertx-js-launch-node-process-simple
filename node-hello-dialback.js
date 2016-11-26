var process = require('process');
var EventBus = require('vertx3-eventbus-client');
var eb = new EventBus("http://localhost:9090/eventbus/")

eb.onopen = function () {
  console.log("opened");
  eb.send("registration",'node registration message')
}


function onerrorEventBus(error) {
  console.log("Problem calling event bus " + JSON.stringify(error))
}

eb.onerror = onerrorEventBus;
