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
      restaurantLat = (results[0].geometry.location.lat());
      restaurantLng = (results[0].geometry.location.lng());
      $scope.map = { center: { latitude: restaurantLat, longitude: restaurantLng}, zoom: 15 };

      var marker=new google.maps.Marker({
      map: $scope.map,
      position: results[0].geometry.location
      });
    }else{
      alert(status);
      }   
  });
  
}
