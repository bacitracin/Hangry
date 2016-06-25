angular 
  .module('openTableApp') 
  .controller('NewRestaurantController', NewRestaurantController); 

function NewRestaurantController(Restaurant, $location) {


  var ctrl = this;

  ctrl.restaurant = new Restaurant();

  ctrl.addRestaurant = function() {
    ctrl.restaurant.$save(function(){
      $location.path('restaurants');
    });
  };

}
