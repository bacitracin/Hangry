class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :reviews
  has_many :restaurants, through: :reviews

  #scope :not_visited_restaurants, -> {Restaurant.all.select{|restaurant| !restaurant.users.include?(self)}}
  #scope :visited_restaurants, -> { self.restaurants }

  def not_visited_restaurants
    Restaurant.all.select{|restaurant| !restaurant.users.include?(self)}
  end

  def visited_restaurants
    self.restaurants
  end
  
end

