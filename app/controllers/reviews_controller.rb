class ReviewsController < ApplicationController 

  before_filter :authenticate_user!, only: [:create, :destroy, :update]
  respond_to :json

  def index
    respond_with(Review.all.order("id DESC"))
  end

  def create 

    @review = Review.new(review_params)
    @review.user_id = current_user.id #could do build

    #add in restaurant id 
    # @review.restaurant_id = @restaurant.id
    if @review.save 
      respond_to do |format|
        format.json { render :json => @review }
      end 
    end 
  end 

  def show
    respond_with(Review.find(params[:id]))
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
    params.require(:review).permit(:user_id, :restaurant_id, :review_text, :review_date, :review_score, :review_title)
  end 

end

