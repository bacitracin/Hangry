angular
  .module('openTableApp')
  .controller('EditReviewController', EditReviewController);

function EditReviewController(Review, $location, $stateParams) {

  var editReview = this;

  editReview.review = Review.get({ id: $stateParams.id})

  editReview.editReview = function(){
    editReview.review.$update(function(){
      $location.path('reviews');
    });
  };
}