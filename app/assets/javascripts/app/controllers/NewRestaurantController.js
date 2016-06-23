angular 
  .module('openTableApp') 
  .controller('NewRestaurantController', NewRestaurantController); 

function NewRestaurantController(Restaurant, $location) {
  
  var new = this; 

  new.restaurant = new Restaurant();

  new.addRestaurant = function() {
    new.restaurant.$save(function() {
      $location.path('restaurants');
    });
  };
}

// $save() saves an entry. 
// Assuming $scope.entry is the Entry object  
// https://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/