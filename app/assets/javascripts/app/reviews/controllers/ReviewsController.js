angular 
  .module('openTableApp') 
  .controller('ReviewsController', ReviewsController);

function ReviewsController(Review, RestaurantService, $scope) {
  
  var reviews = this; 

  reviews.reviews = Review.query();
  
  reviews.updateScope = function(){
    RestaurantService.selectedRestaurant = {};
  }
};