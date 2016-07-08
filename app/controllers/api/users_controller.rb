module Api

    class UsersController < ApplicationController 

      respond_to :json 
      
      def visited_restaurants
        @restaurants = current_user.visited_restaurants
        respond_with(@restaurants)
      end

      def not_visited_restaurants
        @restaurants = current_user.not_visited_restaurants
        respond_with(@restaurants)
      end

      def show 
        @user = set_user
        respond_with(@user)
      end  

end
end