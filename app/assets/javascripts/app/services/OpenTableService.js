angular
  .module('openTableApp')
  .service('OpenTableService', OpenTableService);

function OpenTableService($http){

  this.city = "San Francisco";
  this.price = "1"

}