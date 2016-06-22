var openTableApp = angular
                .module('openTableApp', ['ui.router', 'templates', 'ngResource'])
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
                  //.state('new', {
                  //  url: '/new',
                  //  templateUrl: 'app/views/new.html',
                  //  controller: 'NewRestaurantController as restaurant'
                  //});
                  //.state('restaurant', {
                  //  url: '/restaurant/:id',
                  //  templateUrl: 'app/views/show.html',
                  //  controller: 'ShowRestaurantController as show'
                  //});
                  //.state('home', {
                  //  url: '/',
                  //  templateUrl: 'app/views/home.html',
                  //  controller: 'TestCtrl as test'
                  //});

                  // Defaults to home
                    $urlRouterProvider.otherwise('/');
                });

