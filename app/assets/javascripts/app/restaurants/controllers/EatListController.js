angular 
  .module('openTableApp') 
  .controller('EatListController', EatListController);

function EatListController(Restaurant, $state, $scope) {
  
  var eatList = this; 

  eatList.restaurants = Restaurant.query();

};

