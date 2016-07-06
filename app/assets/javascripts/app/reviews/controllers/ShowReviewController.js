angular
  .module('openTableApp')
  .controller('ShowReviewController', ShowReviewController);

function ShowReviewController(Review, $stateParams, RestaurantService){

  var showReview = this;

  showReview.review = Review.get({ id: $stateParams.id });
}