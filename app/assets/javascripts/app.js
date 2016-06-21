var openTableApp = angular
                .module('openTableApp', ['ui.router', 'templates'])
                .config(function($stateProvider, $urlRouterProvider){
                  $stateProvider
                    .state('home', {
                      url: '/',
                      templateUrl: 'app/views/home.html',
                      controller: 'HomeController as home'
                    })
                  .state('restaurants', {
                    url: '/restaurants',
                    templateUrl: 'app/views/restaurants.html',
                    controller: 'RestaurantController as restaurant'
                  });
                  //.state('home', {
                  //  url: '/',
                  //  templateUrl: 'app/views/home.html',
                  //  controller: 'TestCtrl as test'
                  //});
                  //.state('home', {
                  //  url: '/',
                  //  templateUrl: 'app/views/home.html',
                  //  controller: 'TestCtrl as test'
                  //});
                  //.state('home', {
                  //  url: '/',
                  //  templateUrl: 'app/views/home.html',
                  //  controller: 'TestCtrl as test'
                  //});

                  // Defaults to home
                    $urlRouterProvider.otherwise('/');
                });

