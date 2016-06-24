angular 
  .module('openTableApp') 
  .controller('NewRestaurantController', NewRestaurantController); 

function NewRestaurantController(Restaurant, $location, $scope) {

  $scope.restaurant = new Restaurant();

  $scope.addRestaurant = function() {
    $scope.restaurant.$save(function() {
      $location.path('restaurants');
    });
  };
}

// $save() saves an entry. 
// Assuming $scope.entry is the Entry object  
// https://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/