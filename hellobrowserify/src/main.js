// src/main.js
const angular = require("angular");

angular.module("hellobrowserify", [
  require("angular-route")
]);

// roteamento
angular.module("hellobrowserify").config(($routeProvider) => {
  $routeProvider.when("/tela1", require("./tela1"));
  $routeProvider.when("/tela2", require("./tela2"));
  $routeProvider.otherwise("/tela1");
});

angular.bootstrap(document,["hellobrowserify"]);

