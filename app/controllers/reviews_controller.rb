class ReviewsController < ApplicationController 

  before_filter :authenticate_user!, only: [:create, :destroy, :update]
  respond_to :json

  def index
    respond_with(Review.all.order("id DESC"))
  end

  def create 

    @review = Review.create(review_params)
    @review.user_id = current_user.id
    @restaurant = Restaurant.find_by(:name => params[:restaurant][:name])
    @review.restaurant_id = @restaurant.id

    if @review.save 
      respond_to do |format|
        format.json { render :json => @review }
      end 
    end 
  end 

  def show
    #@review = Review.find(params[:id])
    #@review.restaurant_id
    respond_with(Review.find(params[:id]))
    #respond_with(Restaurant.find(@review.restaurant_id))
  end

  def update 
    @review = Review.find(params[:id])
    if @review.update(review_params) 
      respond_to do |format| 
        format.json { render :json => @review }
      end 
    end 
  end 
  
  def destroy 
    respond_with Review.destroy(params[:id]) 
  end 

  private 

  def review_params 
    params.require(:review).permit(:user_id, :restaurant_id, :review_text, :review_date, :review_score, :review_title, 
      :restaurant_name, :restaurant, :ot_id, :id, :state, :city, :address, :postal_code, :phone, :image_url, :reserve_url, :price )
  end 

end

