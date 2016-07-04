angular
  .module('openTableApp')
  .controller('ShowReviewController', ShowReviewController);

function ShowReviewController(Review, $stateParams){

  var showReview = this;

  showReview.review = Review.get({ id: $stateParams.id });
}