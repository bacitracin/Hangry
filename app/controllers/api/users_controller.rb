module Api

  class UsersController < ApplicationController 
   
    respond_to :json

    def index
      respond_with(User.all.order("id DESC"))
    end 
      
    def visited_restaurants
      @restaurants = current_user.visited_restaurants
      respond_with(@restaurants)
    end

    def not_visited_restaurants
      @restaurants = current_user.not_visited_restaurants
      respond_with(@restaurants)
    end

    def show 
      respond_with(Restaurant.find(params[:id]))
    end 

  end
  
end