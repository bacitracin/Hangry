angular 
  .module('openTableApp') 
  .controller('RestaurantsController', RestaurantsController);

function RestaurantsController(Restaurant, $location, $state) {
  
  var restaurants = this; 

  // query() returns all the entries - INDEX
  restaurants.restaurants = Restaurant.query();

  //delete
  restaurants.deleteRestaurant = function(restaurant) {
    restaurant.$delete(function(){
      $state.go($state.current, {}, {reload: true});
    });
  };
};
