openTableApp.controller('WildCardController', ['$scope', '$resource', 'CityService', 
  function($scope, $resource, CityService) {

        $scope.city = CityService.city;

        $scope.openTableAPI = $resource
        ('http://opentable.herokuapp.com/api/restaurants', {
          callback: "JSON_CALLBACK" }, {get: {method: "JSONP" }});

        $scope.openTableSearchResult = $scope.openTableAPI.get({city: $scope.city, per_page: 100});

        //console.log($scope.openTableSearchResult);

        // Random number for picking the restaurant
       // var randomNumber = Math.random() * (99 - 0) + 0;

       // var randomRestaurant = $scope.openTableSearchResult['restaurants'][randomNumber];
       // randomRestaurant.name = randomRestaurant.name;
       // randomRestaurant.address = randomRestaurant.address;
       // randomRestaurant.city = randomRestaurant.city;
       // randomRestaurant.image_url = randomRestaurant.image_url;
       // randomRestaurant.reserve_url = randomRestaurant.reserve_url;

  }]);