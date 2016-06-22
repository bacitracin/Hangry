angular 
  .module('openTableApp') 
  .controller('NewRestaurantController', NewRestaurantController); 

function NewRestaurantController(Restaurant, $location) {
  
  var restaurant = this; 

  restaurant.restaurant = new Restaurant();
  restaurant.addRestaurant = function() {
    restaurant.restaurant.$save(function() {
      $location.path('restaurants');
    });
  };
}