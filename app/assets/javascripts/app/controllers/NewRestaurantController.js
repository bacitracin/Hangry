angular 
  .module('openTableApp') 
  .controller('NewRestaurantController', NewRestaurantController); 

function NewRestaurantController(Restaurant, $location) {


  var newRestaurant = this;

  newRestaurant.restaurant = new Restaurant();

  newRestaurant.addRestaurant = function() {
    newRestaurant.restaurant.$save(function(){
      $location.path('restaurants');
    });
  };

}
