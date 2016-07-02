angular
  .module('openTableApp')
  .directive('restaurantResult', restaurantResult);

// function returns the actual directive
function restaurantResult() {
  return {
    restrict: 'E', //will look like <restaurant-result></restaurant-result>
    template: '<div class="panel-body"><a href="/#/restaurants/{{restaurant.id}}">{{restaurant.name}}</a> - {{restaurant.city}}</div>'
  };
}
