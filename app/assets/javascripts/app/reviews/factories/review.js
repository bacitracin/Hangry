angular 
  .module('openTableApp')
  .factory('Review', Review)
function Review($resource) {
  
  var Review = $resource('http://localhost:3000/api/reviews/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return Review; 
}