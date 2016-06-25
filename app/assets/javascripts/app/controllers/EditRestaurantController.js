angular
  .module('openTableApp')
  .controller('EditRestaurantController', EditRestaurantController);

function EditRestaurantController(Restaurant, $location, $stateParams) {

  var editRestaurant = this;

  editRestaurant.restaurant = Restaurant.get({ id: $stateParams.id})

  editRestaurant.restaurant = function(){
    editRestaurant.restaurant.$update(function(){
      $location.path('restaurants');
    });
  };
}