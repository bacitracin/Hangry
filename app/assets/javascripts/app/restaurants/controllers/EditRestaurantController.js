angular
  .module('openTableApp')
  .controller('EditRestaurantController', EditRestaurantController);

function EditRestaurantController(Restaurant, $location, $stateParams) {

  var editRestaurant = this;

  editRestaurant.restaurant = Restaurant.get({ id: $stateParams.id})

  editRestaurant.editRestaurant = function(){
    editRestaurant.restaurant.$update(function(){
      $location.path('restaurants');
    });
  };
}