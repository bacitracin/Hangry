angular 
  .module('openTableApp') 
  .controller('NewReviewController', NewReviewController); 

function NewReviewController(Review, $location, $scope, RestaurantService) {

  $scope.restaurantForReview = RestaurantService.restaurantForReview;

  var newReview = this;

  newReview.review = new Review();

  newReview.addReview = function() {
    newReview.review.$save(function(){
      $location.path('reviews');
    });
  };

}
