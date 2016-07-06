angular 
  .module('openTableApp') 
  .controller('NewReviewController', NewReviewController); 

function NewReviewController(Review, $location, $scope, RestaurantService) {

  var newReview = this;

  newReview.review = new Review();

  newReview.review.restaurant = RestaurantService.selectedRestaurant;
  //newReview.review.restaurant.restaurant_id = RestaurantService.selectedRestaurant.id;

  newReview.addReview = function() {
    newReview.review.$save(function(){
      $location.path('reviews');
    });
  };

}
