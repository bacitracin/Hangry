angular
  .module('openTableApp')
  .service('UserService', UserService);

function UserService(){

  this.user = current_user;
  this.username = current_user.username;

}