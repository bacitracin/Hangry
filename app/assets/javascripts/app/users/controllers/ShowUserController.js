angular
  .module('openTableApp')
  .controller('ShowUserController', ShowUserController);

function ShowUserController(User, $stateParams){

  var showUser = this;

  showUser.user= User.get({ id: $stateParams.id });
}