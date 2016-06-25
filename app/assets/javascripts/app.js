var openTableApp = angular
                .module('openTableApp', ['ui.router', 'templates', 'ngResource'])
                .config(function($stateProvider, $urlRouterProvider){
                  $stateProvider
                    // Landing page that asks for your city - WORKS
                    .state('home', {
                      url: '/',
                      templateUrl: 'app/views/home.html',
                      controller: 'HomeController as home'
                    })
                    // Hits Unofficial OpenTable API and randomly pulls a restaurant
                    .state('home.wildcard', {
                      url: 'wildcard',
                      templateUrl: 'app/views/wildcard.html',
                      controller: 'WildCardController as wildcard'
                    })
                    // This is all saved restaurants - WORKS
                    .state('restaurants', {
                      url: '/restaurants',
                      templateUrl: 'app/views/restaurants.html',
                      controller: 'RestaurantsController as restaurants'
                    })
                    // Add a new restaurant - WORKS
                    .state('new', {  
                      url: '/new',
                      templateUrl: 'app/views/new.html',
                      controller: 'NewRestaurantController as newRestaurant'
                    })
                    .state('restaurant', {
                      url: '/restaurant/:id',
                      templateUrl: 'app/views/show.html',
                      controller: 'ShowRestaurantController as showRestaurant'
                    })

                    // Defaults to home
                      $urlRouterProvider.otherwise('/');
                });

