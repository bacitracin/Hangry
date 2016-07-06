angular
  .module('openTableApp')
  .controller('ShowRestaurantController', ShowRestaurantController);

function ShowRestaurantController(Restaurant, $stateParams, $scope, RestaurantService){

  var showRestaurant = this;

  showRestaurant.restaurant = Restaurant.get({ id: $stateParams.id });

  $scope.restaurantForReview = showRestaurant.restaurant;

  $scope.$watch('restaurantForReview', function(){
    RestaurantService.restaurantForReview = $scope.restaurantForReview;
  });
  
}