angular 
  .module('openTableApp')
  .factory('User', User)
function User($resource) {
  
  var User = $resource('http://localhost:3000/api/users/:id.json', {id: '@id'}, {
  update: { method: 'PUT' }
});
  return User; 
}