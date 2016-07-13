angular
  .module('openTableApp')
  .controller('ShowRestaurantController', ShowRestaurantController);

function ShowRestaurantController(Restaurant, $stateParams, $scope, RestaurantService){

  var showRestaurant = this;

  showRestaurant.restaurant = Restaurant.get({ id: $stateParams.id });

  $scope.selectedRestaurant = showRestaurant.restaurant;
  
  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  
  showRestaurant.updateScope = function(){
    RestaurantService.selectedRestaurant = $scope.selectedRestaurant;
  }

  var address='479 14th St San Francisco CA';
  //var address = showRestaurant.restaurant.address + " " + showRestaurant.restaurant.city + " " + showRestaurant.restaurant.state + " " + showRestaurant.restaurant.postal_code;
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address':address},function(results, status){
    if (status == google.maps.GeocoderStatus.OK){
      alert(address);
      alert(results[0].geometry.location);
      alert($scope.map);
      $scope.map.setCenter(results[0].geometry.location);
      test=results[0].geometry.location;
      var marker=new google.maps.Marker({
      map: $scope.map,
      position: results[0].geometry.location
      });
    }else{
      alert(status);
      }   
  });
  
}
