var openTableApp = angular
                .module('openTableApp', ['ui.router', 'templates', 'ngResource'])
                .config(function($stateProvider, $urlRouterProvider){
                  $stateProvider
                    .state('home', {
                      url: '/',
                      templateUrl: 'app/views/home.html',
                      controller: 'HomeController as home'
                    })
                  .state('home.wildcard', {
                    url: 'wildcard',
                    templateUrl: 'app/views/wildcard.html',
                    controller: 'WildCardController as wildcard'
                  })
                  .state('restaurants', {
                    url: '/restaurants',
                    templateUrl: 'app/views/restaurants.html',
                    controller: 'RestaurantController as restaurant'
                  })
                  .state('restaurants.new', {  
                    url: '/new',
                    templateUrl: 'app/views/new.html',
                    controller: 'NewRestaurantController as new'
                  })
                  //.state('home', {
                  //  url: '/',
                  //  templateUrl: 'app/views/home.html',
                  //  controller: 'TestCtrl as test'
                  //});

                  // Defaults to home
                    $urlRouterProvider.otherwise('/');
                });

