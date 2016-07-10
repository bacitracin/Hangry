angular 
  .module('openTableApp') 
  .controller('UsersController', UsersController);

function UsersController(User, $stateParams) {
  
  var users = this; 

  users.users = User.query();

  
  //var selectedUser = User.get({ id: $stateParams.id });//get returns object, query an array

  //selectedUser.$promise.then(function(result){
  //  $scope.restaurants = result.restaurants;
  //});
}

