angular 
  .module('openTableApp') 
  .controller('EatListController', EatListController);

function EatListController(Restaurant, RestaurantService, $scope) {
  
  var eatlist = this; 

  eatlist.restaurants = Restaurant.query();
  
  eatlist.updateScope = function(){
    RestaurantService.selectedRestaurant = {};
  }
};