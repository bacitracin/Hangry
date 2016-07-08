angular
  .module('openTableApp')
  .directive('restaurantResult', restaurantResult);

// function returns the actual directive
function restaurantResult() {
  return {
    restrict: 'E', //will look like <restaurant-result></restaurant-result>
    template: '<div class="panel-body"><a href="#" ui-sref="restaurant.show({id: restaurant.id})">{{ restaurant.name}} </a> - {{ restaurant.city }} - <a href="#" ui-sref="edit({id: restaurant.id})">Edit Details</a></div>',
    replace: true
  };
}