angular 
  .module('openTableApp') 
  .controller('EatListController', EatListController);

function EatListController(Restaurant, $state, $scope) {
  
  var eatlist = this; 

  eatlist.restaurants = Restaurant.query();

  }
};
