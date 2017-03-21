'use strict';

// const angular = require('angular');
let catFactsApp = angular.module('catFactsApp', []);

catFactsApp.controller('CatController', ['$log', '$http', CatController]);

function CatController($log, $http) {
  let self = this;
  $log.debug('CatController');

  self.title = 'Learn about Cats!';

  self.text = '';

  self.gimmeAFact = function() {
    $http.get(`http://localhost:3000`)
    .then(response => {
      self.text = response.data.facts[0];
      return self.text;
    });
  };
}
