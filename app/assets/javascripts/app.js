var openTableApp = angular
                .module('openTableApp', ['ui.router', 'templates', 'ngResource'])
                .config(function($stateProvider, $urlRouterProvider){
                  $stateProvider
                    // Landing page that asks for your city
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
                    // This is all saved restaurants
                    .state('restaurants', {
                      url: '/restaurants',
                      templateUrl: 'app/views/restaurants.html',
                      controller: 'RestaurantsController as restaurants'
                    })
                    // Add a new restaurant
                    .state('new', {  
                      url: '/new',
                      templateUrl: 'app/views/new.html',
                      controller: 'NewRestaurantController as newRestaurant'
                    })

                    // Defaults to home
                      $urlRouterProvider.otherwise('/');
                });

