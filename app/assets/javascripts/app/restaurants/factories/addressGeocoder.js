angular.module('openTableApp').factory('AddressGeocoder',['$q',function($q) {
 
    var myGeo;
 
    var result = function () {
        return {
            success: false,
            message: '',
            location: {
                latitude: '',
                longitude: ''
            }
        }
    };
 
    myGeo = {
        getLocation:function( address ){
            var deferred = $q.defer();
 
            var googleMap = new google.maps.Geocoder();
            googleMap.geocode( { 'address': address}, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
 
                    var ok = new result();
                    ok.success = true;
                    ok.location.latitude = results[0].geometry.location.lat();
                    ok.location.longitude = results[0].geometry.location.lng();
 
                    deferred.resolve(ok);
 
                } else {
                    var error = new result();
                     error.message = 'The geocode was not successful for the these reasons: ' + status;
 
                     deferred.reject(error);
 
                }
 
            });
 
            return deferred.promise;
        }
    };
 
    return myGeo;
 
 
}]);
