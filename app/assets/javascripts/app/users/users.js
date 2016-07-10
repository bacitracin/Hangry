angular 
  .module('openTableApp') 
  .controller('UsersController',UsersController);

function UsersController(User, $location, $state) {
  
  var users= this; 

  users.users = User.query();
};
