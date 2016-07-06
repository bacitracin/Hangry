angular
  .module('openTableApp')
  .service('RestaurantService', RestaurantService);

function RestaurantService(){

  var selectedRestaurant = this;
  selectedRestaurant.restaurant = {};
  selectedRestaurant.restaurant.id = 1;
  selectedRestaurant.restaurant.ot_id = 0;
  selectedRestaurant.restaurant.name = "Little Star";
  selectedRestaurant.restaurant.address = "211 Valencia St.";
  selectedRestaurant.restaurant.city = "San Francisco";
  selectedRestaurant.restaurant.state = "CA";
  selectedRestaurant.restaurant.postal_code = "94103";
  selectedRestaurant.restaurant.phone = "4153333355";
  selectedRestaurant.restaurant.image_url = "www.";
  selectedRestaurant.restaurant.reserve_url = "www.";
  selectedRestaurant.restaurant.price = 2;

}