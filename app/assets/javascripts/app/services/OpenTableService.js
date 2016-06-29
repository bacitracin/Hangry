// Not hooked up yet
angular
  .module('openTableApp')
  .service('OpenTableService', OpenTableService);

function OpenTableService($resource){

  this.getResults = function(city, numResults){
    var openTableAPI = $resource('http://opentable.herokuapp.com/api/restaurants', {
    callback: "JSON_CALLBACK" }, {get: {method: "JSONP" }});
    return openTableAPI.get({city: city, per_page: numResults});

  }
}