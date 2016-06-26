angular
  .module('openTableApp')
  .service('CityService', CityService);

function CityService(){

  this.city = "San Francisco";
  this.numResults = 10;

}