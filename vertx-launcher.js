var Router = require("vertx-web-js/router");
var SockJSHandler = require("vertx-web-js/sock_js_handler");
var router = Router.router(vertx);
var eb = vertx.eventBus();
var opts = {
  "inboundPermitteds" : [
    {
      "address" : "registration"
    }
  ],
  "outboundPermitteds" : [
    {
      "address" : "registration"
    }
  ]
};
router.route('/eventbus/*').handler(SockJSHandler.create(vertx).bridge(opts).handle);

eb.consumer('registration', function (mes) {
  console.log("process registered: " + mes.body())
})

vertx.createHttpServer().requestHandler(router.accept).listen(
        9090,
        "0.0.0.0",
        function (res, res_err) {
            if (res_err)
              console.log('\n##### deploying http server failed #####\n' + res_err);
            else
              $EXEC('./node_script.sh > /tmp/vertx_launch.log')
            console.log("node process PID is :" + $OUT)
        }
);
