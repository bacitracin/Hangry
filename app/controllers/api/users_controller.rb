module Api

  class UsersController < ApplicationController 
   
    respond_to :json

    def index
      respond_with(User.all.order("id DESC"))
    end 

    def show
      respond_with(User.find(params[:id]))
    end

    def your_stuff
      respond_with(User.find(current_user.id))
    end
      
    def visited_restaurants
      @restaurants = current_user.visited_restaurants
      respond_with(@restaurants)
    end

    def not_visited_restaurants
      @restaurants = current_user.not_visited_restaurants
      respond_with(@restaurants)
    end

  end
  
end