angular
  .module('openTableApp')
  .service('OpenTableService', OpenTableService);

function OpenTableService($http){

  this.city = "Houston";

}