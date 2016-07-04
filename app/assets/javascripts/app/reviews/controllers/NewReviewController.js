angular 
  .module('openTableApp') 
  .controller('NewReviewController', NewReviewController); 

function NewReviewController(Review, $location) {

  var newReview = this;

  newReview.review = new Review();

  newReview.addReview = function() {
    newReview.review.$save(function(){
      $location.path('reviews');
    });
  };

}
