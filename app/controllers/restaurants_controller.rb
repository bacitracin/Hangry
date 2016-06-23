module Api
    class RestaurantsController < ApplicationController 
      skip_before_filter :verify_authenticity_token 
      respond_to :json 

      def index 
        respond_with(Restaurant.all.order("id DESC"))
      end 

      def show 
        respond_with(Restaurant.find(params[:id]))
      end 

      def create 
        @restaurant = Restaurant.new(restaurant_params) 
        if @restaurant.save 
          respond_to do |format|
            format.json { render :json => @restaurant}
          end 
        end 
      end 

      def update 
        @restaurant= Restaurant.find(params[:id])
        if @restaurant.update(restaurant_params) 
          respond_to do |format| 
            format.json { render :json => @restaurant}
          end 
        end 
      end 
 
      def destroy 
        respond_with Restaurant.destroy(params[:id]) 
      end 

      private 

        def restaurant_params 
          params.require(:restaurant).permit(:name, :address, :city, :state, :postal_code, :phone, :opentable_id, :image_url, :reserve_url, :price) 
        end 

    end 
end