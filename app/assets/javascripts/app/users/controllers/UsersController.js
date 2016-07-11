angular 
  .module('openTableApp') 
  .controller('UsersController', UsersController);

function UsersController(User, $stateParams) {
  
  var users = this; 

  users.users = User.query();

}

