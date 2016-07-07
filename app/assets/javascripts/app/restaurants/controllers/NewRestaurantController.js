angular 
  .module('openTableApp') 
  .controller('NewRestaurantController', NewRestaurantController); 

function NewRestaurantController(Restaurant, $location, $scope, RestaurantService) {

  var newRestaurant = this;

  newRestaurant.restaurant = new Restaurant();

  $scope.selectedRestaurant = Restaurant.selectedRestaurant;

  newRestaurant.addRestaurant = function() {
    newRestaurant.restaurant.$save(function(){
      $location.path('restaurants');
    });
  };

}