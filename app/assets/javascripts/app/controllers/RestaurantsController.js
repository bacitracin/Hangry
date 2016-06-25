angular 
  .module('openTableApp') 
  .controller('RestaurantsController', RestaurantsController);

function RestaurantsController(Restaurant) {
  
  var restaurants = this; 

  // query() returns all the entries - INDEX
  restaurants.restaurants = Restaurant.query();
};
