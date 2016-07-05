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
                    .state('new', {   // change to restaurants.new
                      url: '/new',
                      templateUrl: 'app/restaurants/views/new.html',
                      controller: 'NewRestaurantController as newRestaurant'
                    })
                    // Show page 
                    .state('restaurant', {  // change to restaurants.show
                      url: '/restaurant/:id',
                      templateUrl: 'app/restaurants/views/show.html',
                      controller: 'ShowRestaurantController as showRestaurant'
                    })
                    // Edit restaurant details
                    .state('edit', { // change to restaurants.edit
                      url:'/edit/:id',
                      templateUrl: 'app/restaurants/views/edit.html',
                      controller: 'EditRestaurantController as editRestaurant'
                    })

                    // TO ADD Reviews User INDEX
                    .state('reviews', {
                      url:'/reviews',
                      templateUrl: 'app/reviews/views/reviews.html',
                      controller: 'ReviewsController as reviews'
                    })
                    // TO ADD Reviews NEW
                    .state('newreview', {
                      url:'/reviews/new',
                      templateUrl: 'app/reviews/views/new.html',
                      controller: 'NewReviewController as newReview'
                    })
                    // TO ADD Reviews SHOW
                    .state('showreview', {
                      url:'/reviews/:id',
                      templateUrl: 'app/reviews/views/show.html',
                      controller: 'ShowReviewController as showReview'
                    })
                    // TO ADD Reviews EDIT
                    .state('editreview', {
                      url:'/reviews/edit/:id',
                      templateUrl: 'app/reviews/views/edit.html',
                      controller: 'EditReviewController as editReview'
                    })

                    // Devise - Login
                    .state('login', {
                      url: '/login',
                      templateUrl: 'app/auth/_login.html',
                      controller: 'AuthCtrl'//,
                      //onEnter: ['$state', 'Auth', function($state, Auth) {
                      //   Auth.currentUser().then(function (){
                      //     $state.go('home');
                    })
                    // Devise - Register
                    .state('register', {
                      url: '/register',
                      templateUrl: 'app/auth/_register.html',
                      controller: 'AuthCtrl'//,
                      //onEnter: ['$state', 'Auth', function($state, Auth) {
                      //   Auth.currentUser().then(function (){
                      //     $state.go('home');
                    })

                    // Defaults to home
                      $urlRouterProvider.otherwise('/');
                });

