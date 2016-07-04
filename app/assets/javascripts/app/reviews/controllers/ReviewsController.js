angular 
  .module('openTableApp') 
  .controller('ReviewsController', ReviewsController);
function ReviewsController(Review) {
  
  var reviews = this; 

  reviews.reviews = Review.query();
};