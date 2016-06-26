angular
  .module('openTableApp')
  .service('CityService', CityService);

function CityService(){

  this.city = "San Francisco";

}