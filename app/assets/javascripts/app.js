var openTableApp = angular
                .module('openTableApp', ['ui.router', 'templates', 'ngResource', 'ngMessages', 'Devise'])
                .config(function($stateProvider, $urlRouterProvider){
                  $stateProvider
                    // Landing page that asks for your city
                    .state('home', {
                      url: '/',
                      templateUrl: 'app/home/home.html',
                      controller: 'HomeController as home'
                    })
                    // Hits Unofficial OpenTable API and pulls restaurant results
                    .state('home.wildcard', {
                      url: 'wildcard',
                      templateUrl: 'app/wildcard/wildcard.html',
                      controller: 'WildCardController as wildcard'
                    })
                    // This is all saved restaurants 
                    .state('restaurants', {
                      url: '/restaurants',
                      templateUrl: 'app/restaurants/views/restaurants.html',
                      controller: 'RestaurantsController as restaurants'
                    })
                    // Add a new restaurant 
                    .state('new', {  
                      url: '/new',
                      templateUrl: 'app/restaurants/views/new.html',
                      controller: 'NewRestaurantController as newRestaurant'
                    })
                    // Show page 
                    .state('restaurant', { 
                      url: '/restaurant/:id',
                      templateUrl: 'app/restaurants/views/show.html',
                      controller: 'ShowRestaurantController as showRestaurant'
                    })
                    // Edit restaurant details 
                    .state('edit', {
                      url:'/edit/:id',
                      templateUrl: 'app/restaurants/views/edit.html',
                      controller: 'EditRestaurantController as editRestaurant'
                    })
                    // Devise - Login
                    .state('login', {
                      url: '/login',
                      templateUrl: 'app/auth/_login.html',
                      controller: 'AuthCtrl'
                    })
                    // Devise - Register
                    .state('register', {
                      url: '/register',
                      templateUrl: 'app/auth/_register.html',
                      controller: 'AuthCtrl',
                    //  onEnter: ['$state', 'Auth', function($state, Auth) {
                    //     Auth.currentUser().then(function (){
                    //       $state.go('home');
                    })

                    // Defaults to home
                      $urlRouterProvider.otherwise('/');
                });

