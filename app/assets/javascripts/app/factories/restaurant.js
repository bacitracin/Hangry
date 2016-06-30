// Restaurant Factory
angular
  .module('openTableApp')
  .factory('Restaurant', Restaurant)

function Restaurant($resource) {

  var Restaurant = $resource('http://localhost:3000/api/restaurants/:id.json', {id: '@id'}, {
    update: { method: 'PUT' }
  });

  return Restaurant;
}