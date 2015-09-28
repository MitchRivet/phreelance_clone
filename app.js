var phreelance = angular.module('phreelance', ['ui.router']);

phreelance.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        
      },
      'body': {
        templateUrl: "partials/home.html"
      }
    }
  });



});
