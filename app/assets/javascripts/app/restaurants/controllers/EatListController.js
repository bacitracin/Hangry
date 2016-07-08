angular 
  .module('openTableApp') 
  .controller('EatListController', EatListController);

function EatListController(Restaurant, RestaurantService, $scope, Auth) {
  
  var eatlist = this; 

  Auth.currentUser().then(function (user){
    $scope.user = user;
  });

  eatlist.restaurants = currentUser.visited_restaurants;

  }
};