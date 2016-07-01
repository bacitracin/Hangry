angular
  .module('openTableApp')
  .service('OpenTableService', OpenTableService);

function OpenTableService($resource){

  this.getResults = function(city, numResults){
    var openTableAPI = 
    $resource('http://opentable.herokuapp.com/api/restaurants', {
      callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}
    });

    return openTableAPI.get({city: city, per_page: numResults});
  }
}
// https://en.wikipedia.org/wiki/JSONP - Its a way to safely request data from a different server.



//JSONP (JSON with Padding or JSON-P[1]) is a technique used by web developers to overcome the cross-domain restrictions imposed by browsers' same-origin policy that limits access to resources retrieved from origins other than the one the page was served by.